var items = [
    {'name' : 'Django', 'categorie_id' : 1},
    {'name' : 'Get Rich',  'categorie_id' : 1}
]

app
    .service('itemProvider', function() {
        this.getItems = function() {
            return items;
        }

        this.create = function(item) {
            items.push(item);
            return items;
        }
    })
;