import React, { Component } from 'react';
import './App.css';
import Vegeta from './components/Vegeta';
import Goku from './components/Goku';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       vegetaLife: 100,
       gokuLife: 100,
    }
  }

  reduceLife = (name, power) => {
    if(name === 'Goku') {
      this.setState({
        vegetaLife: this.state.vegetaLife - power,
      })
    } else {
      this.setState({
        gokuLife: this.state.gokuLife - power
      })
    }
  }

  render() {
    return (
      <div className="container text-center">
        <h1>Goku Vs Vegeta</h1>
        <hr />
        <div className="row">
          <Vegeta name='Vegeta' life={this.state.vegetaLife} reduceLife={this.reduceLife} />
          <Goku name='Goku' life={this.state.gokuLife} reduceLife={this.reduceLife} />
        </div>
      </div>
    );
  }
}

export default App;
