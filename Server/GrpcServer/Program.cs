using GrpcServer.Logic;
using GrpcServer.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddGrpc();
builder.Services.AddCors(o => o.AddPolicy("AllowAll", builder =>
{
    builder.AllowAnyOrigin()
           .AllowAnyMethod()
           .AllowAnyHeader()
           .WithExposedHeaders("Grpc-Status", "Grpc-Message", "Grpc-Encoding", "Grpc-Accept-Encoding");
}));
builder.Services.AddSingleton<MessagesProvider>();
var app = builder.Build();

app.UseRouting();
app.UseGrpcWeb();
app.UseCors(); 
app.UseEndpoints(endpoints =>
    endpoints.MapGrpcService<MessagingService>().EnableGrpcWeb().RequireCors("AllowAll")
);
app.Run();
