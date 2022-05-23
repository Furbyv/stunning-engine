using Grpc.Core;
using GrpcServer.Logic;

namespace GrpcServer.Services;
public class MessagingService : Messaging.MessagingBase
{
    private readonly MessagesProvider _messagesProvider;
    public MessagingService(MessagesProvider provider) => _messagesProvider = provider;
    public override async Task ConnectToChat(Connect request, IServerStreamWriter<Message> responseStream, ServerCallContext context)
    {
        do
        {
            var connected = _messagesProvider.Subscribe(request.Username, responseStream);
            if (connected)
            {
                await responseStream.WriteAsync(new Message() { Message_ = "Succesfully joined chat", Username = request.Username});
            }
        }
        while (!context.CancellationToken.IsCancellationRequested);
        _messagesProvider.Unsubscribe(request.Username);
    }

    public override async Task<Status> SendMessage(Message request, ServerCallContext context)
        => new Status() { State = await _messagesProvider.SendMessageAsync(request) };

    public override Task<Status> Unsubscribe(Connect request, ServerCallContext context)
        => Task.FromResult(new Status(){ State = _messagesProvider.Unsubscribe(request.Username) });
}
