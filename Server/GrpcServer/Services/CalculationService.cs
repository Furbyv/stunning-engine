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
                if(toDo > 0)
                {
                    progress.Progress_ = (((double)(request.TaskSize - toDo)) / (double)request.TaskSize) *100;
                }
                else
                {
                    progress.Progress_ = 100;
                }
                await responseStream.WriteAsync(progress);
                Thread.Sleep(200);
            }
            while (!context.CancellationToken.IsCancellationRequested && toDo > 0);
        }
    }
}
