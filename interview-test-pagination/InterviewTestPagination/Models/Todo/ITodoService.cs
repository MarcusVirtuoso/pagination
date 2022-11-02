using System.Collections.Generic;

namespace InterviewTestPagination.Models.Todo {
    public interface ITodoService : IModelService<Todo> {
        PagedResult<Todo> All(int page, int pageSize, string orderBy, string ordering);
    }
}
