(function (angular) {
    "use strict";

    angular
        .module("todoApp")
        .controller("pagination", pagination);

    function pagination($scope, todoPaginatedListService) {
        $scope.loading = true
        $scope.gotoPage = gotoPage;
        $scope.updatePageSize = updatePageSize;

        function updatePageSize() {
            $scope.queryParams.currentPage = 1;

            // Call the service.js with the queryParams to get the result and render the HTML with the data
            todoPaginatedListService.getTodos({ page: $scope.queryParams.currentPage, pageSize: $scope.queryParams.pageSize, orderBy: $scope.key, ordering: $scope.ordering })
                .then(res => {
                    $scope.todos = res.data.rows,
                    $scope.totalCount = res.data.totalCount,
                    $scope.todo.totalPages = res.data.totalPages
                })
            $scope.loading = false
        }

        function gotoPage(page, fn) {
            if (!page) { return; }

            if (page <= 0 || page > $scope.todo.totalPages) { return; }

            if (fn === 'first') {
                page = 1
            } else if (fn === 'prev') {
                page = page - 1
                if (page === 0) page = 1
            } else if (fn === 'next') {
                page = (page < $scope.todo.totalPages) ? (page + 1) : ($scope.todo.totalPages)

            } else if (fn === 'last') {
                page = $scope.todo.totalPages
            }

            $scope.queryParams.currentPage = page;

            // Call the service.js with the queryParams to get the result and render the HTML with the data
            todoPaginatedListService.getTodos({ page, pageSize: $scope.queryParams.pageSize, orderBy: $scope.key, ordering: $scope.ordering })
                .then(res => {
                    $scope.todos = res.data.rows,
                    $scope.totalCount = res.data.totalCount,
                    $scope.todo.totalPages = res.data.totalPages
                })
        }
    }

})(angular);