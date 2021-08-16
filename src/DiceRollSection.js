import React, { Component } from 'react';
import './DiceRollSection.css';

class DiceRollSection extends Component {
    render () {
        return (
            <div className="dice-roll-section">
                <button className="dice-button">Roll Dice!</button>
                <button className="dice-button">Analyze Roll</button>
            </div>
        );
    }
}

export default DiceRollSection;