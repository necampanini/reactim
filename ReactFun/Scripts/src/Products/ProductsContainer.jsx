import React from 'react'
import $ from 'jquery'

export default class ProductsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleToggle = this.handleToggle.bind(this);

        this.state = {
            testSuccessful: true
        };
    }

    componentDidMount() {
        console.log('component did, mount.')
        console.log(this.state.testSuccessful);''
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
            </div>
            
        )
    }

    // handleToggle = () => { //babel not form
    handleToggle() {
        var nextState = !this.state.testSuccessful;

        this.setState({testSuccessful: nextState},
            () => console.log(this.state.testSuccessful));
    }
    
}