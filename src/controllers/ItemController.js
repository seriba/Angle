

app
    .controller('itemIndex', function ($scope) {

    })

    .controller('itemList', function ($scope, itemProvider) {
        $scope.items = itemProvider.getItems();
    })

    .controller('itemCreate', function ($scope) {

    })

    .controller('itemUpdate', function ($scope) {

    })

    .controller('itemDelete', function ($scope) {

    })
;