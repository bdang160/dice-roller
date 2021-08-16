import React, { Component } from 'react';
import './DiceRollSection.css';

class DiceRollSection extends Component {
    constructor() {
        super();
        this.state = {
          rollResult: 0
        };
      }

    render () {
        return (
            <div className="dice-roll-section">
                <button className="dice-button">Roll Dice!</button>
                <button className="dice-button">Analyze Roll</button>
                <p>Rolled: { this.state.rollResult }</p>
            </div>
        );
    }
}

export default DiceRollSection;