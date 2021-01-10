import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      message: "React is the Best!"
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.message}
          </p>
          <button onClick={() => this.setState(
            { message: "Of cause FrontEnd dev is the best" }
          )
          }>
            CHANGE MESSAGE
        </button>
        </header>
      </div>
    );
  }
}

export default App;
