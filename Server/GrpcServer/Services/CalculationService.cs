using Grpc.Core;

namespace GrpcServer.Services
{
    public class CalculationService : Calculating.CalculatingBase
    {
        public override async Task Calculate(Calculation request, IServerStreamWriter<Progress> responseStream, ServerCallContext context)
        {
            var toDo = request.TaskSize;
            do
            {
                toDo--;
                var progress= new Progress();
                progress.ToDo = toDo;
                progress.Finished = request.TaskSize - toDo;
                if(progress.ToDo > 0 && progress.Finished > 0)
                {
                    progress.Progress_ = progress.ToDo / progress.Finished;
                }
                else
                {
                    progress.Progress_ = 0;
                }
                await responseStream.WriteAsync(progress);
                Thread.Sleep(1000);
            }
            while (context.CancellationToken.IsCancellationRequested && toDo > 0);
        }
    }
}
