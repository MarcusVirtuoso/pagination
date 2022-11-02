using InterviewTestPagination.Search.Todo;
using System.Collections.Generic;
using System.Linq;
using InterviewTestPagination.Models;

namespace InterviewTestPagination.Models.Todo
{
    /// <summary>
    /// Todo Service Service layer extending from ITodoService interface that implements the base IModelService. 
    /// </summary>
    public class TodoService : ITodoService
    {
        private readonly ITodoRepository _todoRepository;

        public TodoService(ITodoRepository todoRepository)
        {
            _todoRepository = todoRepository;
        }

        public PagedResult<Todo> All(int pageNumber, int pageSize, string orderBy, string ordering)
        {
            var resultRepository = _todoRepository.All().AsQueryable();
            if (ordering == "desc")
            {
                if (orderBy == "id") resultRepository = resultRepository.OrderByDescending(x => x.Id);
                if (orderBy == "task") resultRepository = resultRepository.OrderByDescending(x => x.Task);
                if (orderBy == "createddate") resultRepository = resultRepository.OrderByDescending(x => x.CreatedDate);
            }
            else if (ordering == "asc")
            {
                if (orderBy == "id") resultRepository = resultRepository.OrderBy(x => x.Id);
                if (orderBy == "task") resultRepository = resultRepository.OrderBy(x => x.Task);
                if (orderBy == "createddate") resultRepository = resultRepository.OrderBy(x => x.CreatedDate);
            }
            var pagedResult = PagedResult<Todo>.GetPagedList(resultRepository, pageNumber, pageSize);
            return pagedResult;
        }

        public IEnumerable<Todo> List()
        {
            // invoke Datasource layer
            return _todoRepository.All();
        }
    }
}
