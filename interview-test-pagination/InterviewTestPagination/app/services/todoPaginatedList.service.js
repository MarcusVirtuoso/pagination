(function (angular) {
    "use strict";

    angular
        .module("todoApp")
        .service('todoPaginatedListService', todoPaginatedListService);

    function todoPaginatedListService($http) {
        this.getTodos = (queryParams) => {
            if (!queryParams) {
                queryParams = { page: 1, pageSize: 20, orderBy: 'createddate', ordering: 'desc' };
            }
            return $http({
                method: 'GET',
                url: 'api/Todo/Todos',
                params: queryParams,
            });
        }
    }

})(angular);