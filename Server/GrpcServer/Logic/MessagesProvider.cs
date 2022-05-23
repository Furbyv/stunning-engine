using Grpc.Core;
using System.Collections.Concurrent;

namespace GrpcServer.Logic;
public class MessagesProvider
{
    private readonly ConcurrentDictionary<string, IServerStreamWriter<Message>> users = new();
    public bool Subscribe(string userName, IServerStreamWriter<Message> stream) => users.TryAdd(userName, stream);
    public bool Unsubscribe(string userName) => users.TryRemove(userName, out _);
    public async Task<bool> SendMessageAsync(Message message) => await SendMessage(message);

    private async Task<bool> SendMessage(Message message)
    {
        foreach(var user in users)
        {
            var item = await SendMessageToSubscriber(user, message);
            if(item != null)
            {
                Unsubscribe(item?.Key);
            }
        }
        return true;
    }

    private async Task<KeyValuePair<string, IServerStreamWriter<Message>>?> SendMessageToSubscriber(KeyValuePair<string, IServerStreamWriter<Message>> user, Message message)
    {
        try
        {
            //Set a unique id for each message sent
            message.Id = Guid.NewGuid().ToString("N");
            await user.Value.WriteAsync(message);
            return null;
        }catch (Exception ex)
        {
            Console.WriteLine(ex.ToString());
            return user;
        }
    }
}
