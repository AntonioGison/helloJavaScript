import React from "react";
import "./App.css";
import StateComp, {Component} from "./Components/StateComp";
import PropComp from "./Components/PropComp";

class App extends React.Component {

  styles={ fontStyle: "bold",
            color: "teal"}
  
  render(){
      return (<div className="App">
          <h1 style={this.styles} >Welcome</h1>
          <p></p>
          <StateComp /> 
          <PropComp name="pippo" />  
      </div>) ; 
  }
}

export default App;
