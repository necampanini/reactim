import React from 'react'

export default class ContainerHeader extends React.Component {
    constructor(props){
        super(props);

        //if you define functions, you would bind them here
        this.functionName = this.functionName.bind(this);
    }

    render() {
        return (
            <div>I am the container HEAderrrr</div>
        )
    }

    functionName(){
        console.log('i am functionName')
    }
}

