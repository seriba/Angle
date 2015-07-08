var items = [
    {'name' : 'Django', 'categorie_id' : 1},
    {'name' : 'Get Rich',  'categorie_id' : 1}
]

app
    .service('itemProvider', function() {
        this.getItems = function() {
            return items;
        }
    })
;