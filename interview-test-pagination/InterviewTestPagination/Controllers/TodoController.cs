using System.Collections.Generic;
using System.Web.Http;
using InterviewTestPagination.Models;
using InterviewTestPagination.Models.Todo;
using InterviewTestPagination.Search.Todo;

namespace InterviewTestPagination.Controllers {
    /// <summary>
    /// 'Rest' controller for the <see cref="Todo"/>
    /// model.
    /// </summary>
    public class TodoController : ApiController {
        private readonly ITodoService _todoService;

        public TodoController(ITodoService todoService)
        {
            _todoService = todoService;
        }

        [HttpGet]
        public PagedResult<Todo> Todos(string orderBy, string ordering, int page, int pageSize)
        {
            return _todoService.All(page, pageSize, orderBy, ordering);
        }
    }
}
