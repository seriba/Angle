app.config(
    function ($routeProvider) {
        $routeProvider
            .when('/categories/', {
                controller : 'categoryList',
                templateUrl: 'views/category/list.html'
            })
    }
);