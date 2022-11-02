using InterviewTestPagination.Models.Todo;
using System.Web.Http;
using Unity;
using Unity.WebApi;

namespace InterviewTestPagination
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();

            container.RegisterType<ITodoRepository, TodoRepository>();
            container.RegisterType<ITodoService, TodoService>();

            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
        }
    }
}