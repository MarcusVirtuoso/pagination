(function (angular) {
    "use strict";

    angular
        .module("todoApp")
        .controller("todoPaginatedListController", todoPaginatedListController);

    function todoPaginatedListController($scope, todoPaginatedListService) {
        $scope.key = 'createddate';
        $scope.todo = {};
        $scope.queryParams = {};
        $scope.ordering = 'desc';
        $scope.loading = true;

        $scope.orderBy = orderBy;
        $scope.getOrderingClass = getOrderingClass;

        todoPaginatedListService.getTodos().then(res => {
                $scope.todos = res.data.rows,
                $scope.totalCount = res.data.totalCount,
                $scope.todo.totalPages = res.data.totalPages,
                $scope.loading = false
        });

        /**
         * If the orderBy key is the same, inverts the query ordering direction (means a second click at the same table head)
         * @param {any} key Table head which will determine the key for data ordering
         */
        function invertOrdering(key) {
            if (key == $scope.key) {
                $scope.ordering = $scope.ordering === 'desc' ? 'asc' : 'desc';
            } else {
                $scope.ordering = 'asc';
            }
        }

        /**
         * 
         * @param {any} key
         */
        function getOrderingClass(key) {
            if (key == $scope.key) {
                return $scope.ordering === 'desc' ? 'arrow-down' : 'arrow-up';
            }

            return 'arrow-invisible';
        }

        /**
         * Calls getTodos API with new ordering parameters
         * @param {any} key Table head which will determine the key for data ordering
         */
        function orderBy(key) {
            $scope.key = key;

            // invoking function to order the list
            invertOrdering(key);

            // go to first page to order items
            $scope.queryParams.currentPage = 1

            // Handle the orderBy and call the service.js passing the queryParams and get the return to render on html
            todoPaginatedListService.getTodos({ page: $scope.queryParams.currentPage, pageSize: $scope.queryParams.pageSize, orderBy: $scope.key, ordering: $scope.ordering  })
                .then(res => {
                    $scope.todos = res.data.rows,
                    $scope.totalCount = res.data.totalCount,
                    $scope.todo.totalPages = res.data.totalPages
                })
        }
    }

})(angular);