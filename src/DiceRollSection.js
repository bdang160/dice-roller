import React, { Component } from 'react';
import './DiceRollSection.css';

class DiceRollSection extends Component {
    constructor() {
        super();
        this.state = {
            rollResult: 0
        };
    }

    calculateRollResult = () => {
        this.setState({
            rollResult: this.rollDice(this.props.numD4, 4)
                + this.rollDice(this.props.numD6, 6)
                + this.rollDice(this.props.numD8, 8)
                + this.rollDice(this.props.numD10, 10)
                + this.rollDice(this.props.numD12, 12)
                + this.rollDice(this.props.numD20, 20)
        });
    };

    rollDice(numDice, max) {
        var total = 0;
        var multipleModifier = 1;

        // In case numDice is negative
        if (numDice < 0) {
            multipleModifier = -1;
        }

        for (var i = 0; i < Math.abs(numDice); i++) {
            // The '+1' changes the range to start from 1
            total += Math.floor(Math.random() * max) + 1;
        }
        return total * multipleModifier;
    }

    render () {
        return (
            <div className="dice-roll-section">
                <button className="dice-button" onClick={this.calculateRollResult}>Roll Dice!</button>
                <button className="dice-button">Analyze Roll</button>
                <p>Rolled: { this.state.rollResult }</p>
            </div>
        );
    }
}

export default DiceRollSection;