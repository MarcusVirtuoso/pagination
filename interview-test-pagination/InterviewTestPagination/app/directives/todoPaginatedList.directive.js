(function (angular) {
    "use strict";

    angular
        .module("todoApp")
        .directive("todoPaginatedList", [todoPaginatedListDirective]);

    /**
     * Directive definition function of 'todoPaginatedList'.
     *
     * TODO: correctly parametrize scope (inherited? isolated? which properties?)
     * TODO: create appropriate functions (link? controller?) and scope bindings
     * TODO: make appropriate general directive configuration (support transclusion? replace content? EAC?)
     *
     * @returns {} directive definition object
     */
    function todoPaginatedListDirective() {
        return {
            restrict: "E", // example setup as an element only
            templateUrl: "app/templates/todo.list.paginated.html",
            scope: {}, // example empty isolate scope
            controller: "todoPaginatedListController",
            link: (scope, element, attrs) => { }
        };
    }


})(angular);