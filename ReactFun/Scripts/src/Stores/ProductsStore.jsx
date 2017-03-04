import Rigby from 'rigby'

var ProductsStore = Rigby.createStore('ProductsStore', {

    state: {
        testSuccessful: true,
        products: []
    },

    actions: {
        fetchHeader: {
            credentials: 'same-origin'
        },

        updateForm(property, value){
            this.state[property] = value;

            console.log(this.state);

            this.emitChange();
        },

        retrieveAllProducts() {
            fetch('/api/Products', this.fetchHeader)
            .then(function(data){
                return data.json()
            })
            .then(function(data) {
                Rigby.dispatch('setProducts', data)
            })
        },

        setProducts(products) {
            this.state.products = products;
            console.log(this.state);
        }
    }
});

module.exports = ProductsStore;