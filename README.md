# gRPC dotnet/angular example project

This is an example project used to demo the use of gRPC with a .NET Core server and an Angular client. The .NET Core project exposes gRPC-web services for the client to connect with. gRPC-web is limited compared to gRPC as it only allows unary calls and server streaming. More information can be found at: https://docs.microsoft.com/en-us/aspnet/core/grpc/browser?view=aspnetcore-6.0

## Protos

The proto files in the ./protos directory define the communication contract between server and client. Please, do note that the protos are duplicated in the angular client project. this is to keep the auto generate code with protoc working:

```
npm run proto:generate:win
```

## gRPC Server

The server exposes two example services:

#### MessagingService:

Example service to demonstrate a server stream to push messages across multiple subscribers (clients). Clients can subscribe to, send messages and unsubscribe from the server stream. MessagingService is based on the project from chcg (https://github.com/chgc/grpc-dotnetcore-3-chat)

#### CalculationService:

Example service to demonstrate an alternative from polling the calculation status commonly used with REST webservices. In this service clients can start a calculation with n tasks and the server stream returns the progress (mocked by using thread.sleep).

## gRPC client

The client has a single page showing two features:

#### Chat card component

The chat connects the client to the server's MessagingService by sending an Connect object (including username) to the service's endpoint. Whilst the client is connected, the server can push new messages from other clients to the newly connected client. The client can send messages by making a unary request to the MessageService containing a Message object (includes username and message). This message will be pushed to all other connected clients. Finally, if the chat card component gets destroyed, a unsubscribe request will be fired, unsubscribing the connected client from the server.

#### Calculation card component

A button "Start calculation" to make a Calculation server stream request to the server's CalculationService. The request contains a default taskSize of 100. The following response stream will trigger a simple progress bar to show, displaying the calculation status of the made caclualtion request.
