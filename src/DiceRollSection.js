import React, { Component } from 'react';
import Chart from "react-apexcharts";
import './DiceRollSection.css';

class DiceRollSection extends Component {
    constructor() {
        super();
        this.state = {
            rollResult: 0,
            options: {
                chart: {
                  id: "basic-bar"
                },
                xaxis: {
                  categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                }
              },
              series: [
                {
                  name: "series-1",
                  data: [30, 40, 45, 50, 49, 60, 70, 91]
                }
              ]
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
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    width="500"
                />
            </div>
        );
    }
}

export default DiceRollSection;