
app
    .directive('decorateCategory', function() {
        return {
            template : '{{category.id}} correspond a l\'id de {{category.name}}'
        }
    })
;     