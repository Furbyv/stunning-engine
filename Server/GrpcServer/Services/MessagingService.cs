﻿using Google.Protobuf.WellKnownTypes;
using Grpc.Core;
using GrpcServer.Logic;

namespace GrpcServer.Services
{
    public class MessagingService : Messaging.MessagingBase
    {
        private readonly MessagesProvider _messagesProvider;
        public MessagingService(MessagesProvider provider) => _messagesProvider = provider;
        public override async Task ConnectToChat(Connect request, IServerStreamWriter<Message> responseStream, ServerCallContext context)
        {
            do
            {
                _messagesProvider.Subscribe(request.Username, responseStream);
            }
            while (!context.CancellationToken.IsCancellationRequested);
            _messagesProvider.Unsubscribe(request.Username);
        }

        public override async Task<Status> SendMessage(Message request, ServerCallContext context)
            => new Status() { State = await _messagesProvider.SendMessageAsync(request) };

        public override async Task<Status> Unsubscribe(Connect request, ServerCallContext context)
            => new Status(){ State = _messagesProvider.Unsubscribe(request.Username) };
    }
}