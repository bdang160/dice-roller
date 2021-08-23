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

    calculateRangeMinimum() {
        // Minimum roll for any positive number of dice
        // Maximum roll for any negative number of dice.

        var resultD4 = 0;
        var resultD6 = 0;
        var resultD8 = 0;
        var resultD10 = 0;
        var resultD12 = 0;
        var resultD20 = 0;

        // Calculate numD4 result
        if (this.props.numD4 < 0) {
            resultD4 = this.props.numD4 * 4 * -1;
        }
        else {
            resultD4 = this.props.numD4;

        }

        // Calculate numD6 result
        if (this.props.numD6 < 0) {
            resultD6 = this.props.numD6 * 6 * -1;
        }
        else {
            resultD6 = this.props.numD6;

        }

        // Calculate numD8 result
        if (this.props.numD8 < 0) {
            resultD8 = this.props.numD8 * 8 * -1;
        }
        else {
            resultD8 = this.props.numD8;

        }

        // Calculate numD10 result
        if (this.props.numD10 < 0) {
            resultD10 = this.props.numD10 * 10 * -1;
        }
        else {
            resultD10 = this.props.numD10;

        }

        // Calculate numD12 result
        if (this.props.numD12 < 0) {
            resultD12 = this.props.numD12 * 12 * -1;
        }
        else {
            resultD12 = this.props.numD12;

        }

        // Calculate numD20 result
        if (this.props.numD20 < 0) {
            resultD20 = this.props.numD20 * 20 * -1;
        }
        else {
            resultD20 = this.props.numD20;

        }

        var result = resultD4
        + resultD6
        + resultD8
        + resultD10
        + resultD12
        + resultD20;

        return result;
    }

    calculateRangeMaximum() {
        // Maximum roll for any positive number of dice

        // Minimum roll for any negative number of dice.
        var resultD4 = 0;
        var resultD6 = 0;
        var resultD8 = 0;
        var resultD10 = 0;
        var resultD12 = 0;
        var resultD20 = 0;

        // Calculate numD4 result
        if (this.props.numD4 < 0) {
            resultD4 = this.props.numD4 * 4;
        }
        else {
            resultD4 = this.props.numD4 * -1;

        }

        // Calculate numD6 result
        if (this.props.numD6 < 0) {
            resultD6 = this.props.numD6 * 6;
        }
        else {
            resultD6 = this.props.numD6 * -1;

        }

        // Calculate numD8 result
        if (this.props.numD8 < 0) {
            resultD8 = this.props.numD8 * 8
        }
        else {
            resultD8 = this.props.numD8 * -1;

        }

        // Calculate numD10 result
        if (this.props.numD10 < 0) {
            resultD10 = this.props.numD10 * 10;
        }
        else {
            resultD10 = this.props.numD10 * -1;

        }

        // Calculate numD12 result
        if (this.props.numD12 < 0) {
            resultD12 = this.props.numD12 * 12;
        }
        else {
            resultD12 = this.props.numD12 * -1;

        }

        // Calculate numD20 result
        if (this.props.numD20 < 0) {
            resultD20 = this.props.numD20 * 20;
        }
        else {
            resultD20 = this.props.numD20 * -1;

        }

        var result = resultD4
        + resultD6
        + resultD8
        + resultD10
        + resultD12
        + resultD20;

        return result;
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