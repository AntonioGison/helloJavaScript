import React, {Component} from "react";

export class StateComp extends Component{
    constructor(props){
        super(props)
        this.state = {
            message: 'subscribe here',
            sub: 'subscribe'
        }
     // Bind the method to the component instance
     this.changeText = this.changeText.bind(this);
    }

    styles={ fontStyle: "italic",
    color: "red"}

    changeText(){
        this.setState({
            message: 'this is a new message after the onclick on button',
            sub: 'new sub'
        })
    }

    render(){
        return (<div>
                <h3 style={this.styles}>{this.state.message}</h3>
                <button onClick={this.changeText}>{this.state.sub}</button>
            </div>)
    }
}

export default StateComp;