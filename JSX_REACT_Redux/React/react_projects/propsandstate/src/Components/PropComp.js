import React, { Component } from 'react'


export default class PropComp extends React.Component{

    render(){

        return <div>this text uses props {this.props.name} </div>;
    }
}
