import React from 'react'

export default class ContainerBody extends React.Component {
    constructor(props){
        super(props);

        //if you define functions, you would bind them here
        this.functionName = this.functionName.bind(this);
    }

    render() {
        return (
            <div>I am the container body!!!!</div>
        )
    }

    functionName(){
        console.log('i am functionName')
    }
}

