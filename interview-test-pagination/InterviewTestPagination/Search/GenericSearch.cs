using System;

namespace InterviewTestPagination.Search
{
    public abstract class GenericSearch
    {
        public int CurrentPage { get; set; }
        public int PageSize { get; set; }
        public string OrderBy { get; set; }
        public string Ordering { get; set; }
        public long? Id { get; set; }
        public DateTime? CreatedDate { get; set; }

        protected GenericSearch(GenericSearch o = null)
        {
            OrderBy = "";
            PageSize = 20;
            Ordering = "DESC";
            CurrentPage = 1;

            if (o != null)
            {
                OrderBy = o.OrderBy;
                Ordering = o.Ordering;
                PageSize = o.PageSize;
                CurrentPage = o.CurrentPage > 0 ? o.CurrentPage : 1;
            }
        }

        public bool IsDesc()
        {
            return Ordering.ToUpper() == "DESC";
        }
    }
}