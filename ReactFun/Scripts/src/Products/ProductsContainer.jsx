import React from 'react'
import ProductsStore from '../Stores/ProductsStore.jsx'


export default class ProductsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleToggle = this.handleToggle.bind(this);

        this.state = ProductsStore.getState();
    }

    componentDidMount() {
        this.callbackIndex = ProductsStore.listen(this.onChange);
    }

    componentWillUnmount() {
        ProductsStore.mute(this.callbackIndex);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <div>
                test success: {this.state.testSuccessful.toString()}
                <div>
                    <button onClick={this.handleToggle}>
                        click for toggle
                    </button>
                </div>
                <hr/>
                <div>
                    <button onClick={this.loadProducts}>
                        click to load
                    </button>
                </div>
            </div>
            
        )
    }

    handleToggle() {
        var nextState = !this.state.testSuccessful;

        Rigby.dispatch('updateForm', 'testSuccessful', nextState);
    }

    loadProducts() {
        Rigby.dispatch('retrieveAllProducts')
    }
    
}