import React, { Component } from 'react'
import Counter from './components/Counter'
import './App.css'
export default class App extends Component {

state = {

  display : true 
}


  render() {
    return (
      <div className="App">

        <button style={{marginBottom:"20px"}}onClick={()=> this.setState({display : !this.state.display})}>
          
          {this.state.display ? "cacher le compteur" : "afficher le compteur"}</button>

        {

      this.state.display ?

        <Counter /> : ""


  }
      </div>
    )
  }
}

