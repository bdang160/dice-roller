import React, { Component } from "react";
import './App.css';
import SiteHeader from './SiteHeader.js';
import DiceRollSection from './DiceRollSection.js';
import CounterComponent from './CounterComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      numD4: 0,
      numD6: 0,
      numD8: 0,
      numD10: 0,
      numD12: 0,
      numD20: 0
    };
  }

  incrementNumD4 = () => {
    this.setState({
      numD4: this.state.numD4 + 1
    });
  };

  incrementNumD6 = () => {
    this.setState({
      numD6: this.state.numD6 + 1
    });
  };

  incrementNumD8 = () => {
    this.setState({
      numD8: this.state.numD8 + 1
    });
  };

  incrementNumD10 = () => {
    this.setState({
      numD10: this.state.numD10 + 1
    });
  };

  incrementNumD12 = () => {
    this.setState({
      numD12: this.state.numD12 + 1
    });
  };

  incrementNumD20 = () => {
    this.setState({
      numD20: this.state.numD20 + 1
    });
  };

  decrementNumD4 = () => {
    this.setState({
      numD4: this.state.numD4 - 1
    });
  };

  decrementNumD6 = () => {
    this.setState({
      numD6: this.state.numD6 - 1
    });
  };

  decrementNumD8 = () => {
    this.setState({
      numD8: this.state.numD8 - 1
    });
  };

  decrementNumD10 = () => {
    this.setState({
      numD10: this.state.numD10 - 1
    });
  };

  decrementNumD12 = () => {
    this.setState({
      numD12: this.state.numD12 - 1
    });
  };

  decrementNumD20 = () => {
    this.setState({
      numD20: this.state.numD20 - 1
    });
  };

  render() {
    return (
      <div className="App">
        <SiteHeader />
        <DiceRollSection numD4={this.state.numD4} numD6={this.state.numD6} numD8={this.state.numD8} numD10={this.state.numD10} numD12={this.state.numD12} numD20={this.state.numD20}/>
        <div class="site-body">
            <div className="counter-grid">
                <CounterComponent diceText="d4" incFunc={ this.incrementNumD4 } decFunc={ this.decrementNumD4 } count={this.state.numD4}/>
                <CounterComponent diceText="d6" incFunc={ this.incrementNumD6 } decFunc={ this.decrementNumD6 } count={this.state.numD6}/>
                <CounterComponent diceText="d8" incFunc={ this.incrementNumD8 } decFunc={ this.decrementNumD8 } count={this.state.numD8}/>
                <CounterComponent diceText="d10" incFunc={ this.incrementNumD10 } decFunc={ this.decrementNumD10 } count={this.state.numD10}/>
                <CounterComponent diceText="d12" incFunc={ this.incrementNumD12 } decFunc={ this.decrementNumD12 } count={this.state.numD12}/>
                <CounterComponent diceText="d20" incFunc={ this.incrementNumD20 } decFunc={ this.decrementNumD20 } count={this.state.numD20}/>
            </div>
            
        </div>
        <footer class="footer"></footer>
      </div>
    );
  }
  
}

export default App;
