import React, { Component } from "react";
import Button from "./Button.js";
import "./CounterComponent.css";

class CounterComponent extends Component {

  render() {
    return (
      <div className="counter-component">
        <div>
          <div class="count">
            <h3>{(this.props.diceText ? this.props.diceText : "Count")}:</h3>
            <h1>{this.props.count}</h1>
          </div>
          <div class="buttons">
            <Button title={"-"} action={this.props.decFunc} />
            <Button title={"+"} action={this.props.incFunc} />
          </div>
        </div>
      </div>
    );
  }
}

export default CounterComponent;