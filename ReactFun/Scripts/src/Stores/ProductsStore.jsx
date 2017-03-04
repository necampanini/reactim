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
            Rigby.dispatch('callFetch',"/api/products/", this.fetchHeader, 'setProducts');
        },

        callFetch(uri, header, callback){
            fetch(uri, header)
            .then(function(response){
                return response.json()
            })
            .then(function(resultingData){
                Rigby.dispatch(callback, resultingData)
            });
        },

        setProducts(products) {
            debugger;
            this.state.products = products;
            this.emitChange();
        }
    }
});

module.exports = ProductsStore;