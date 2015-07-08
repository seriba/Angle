
app
    .directive('decorateItem', function() {
        return {
            template : 'Item : {{item.name}} est dans {{item.categorie_id}}'
        }
    })
;