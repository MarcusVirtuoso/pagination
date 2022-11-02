using System;
using System.Collections.Generic;
using System.Linq;

namespace InterviewTestPagination.Models
{
    public class PagedResult<T> where T : class
    {
        public int CurrentPage { get; }
        public int TotalPages { get; }
        public int TotalCount { get; }
        public int PageSize { get; }
        public IEnumerable<T> Rows {  get; }

        public PagedResult(IEnumerable<T> rows, int count, int pageNumber, int pageSize)
        {
            TotalCount = count;
            PageSize = pageSize;
            CurrentPage = pageNumber;
            TotalPages = (int)Math.Ceiling((double)count / pageSize);
            Rows = rows;
        }

        public static PagedResult<T> GetPagedList(IQueryable<T> source, int pageNumber, int pageSize)
        {
            var count = source.Count();

            var rows = source
                .Skip((pageNumber - 1) * pageSize)
                .Take(pageSize)
                .ToList();

            var response = new PagedResult<T>(rows, count, pageNumber, pageSize);

            return response;
        }
    }
}