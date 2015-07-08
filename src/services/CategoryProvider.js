var categories = [
    {'id' : 1, 'name' : 'films'},
    {'id' : 2, 'name' : 'musique'}
]

app
    .service('categoryProvider', function() {
        this.getCategories = function() {
            return categories;
        }
    })
;