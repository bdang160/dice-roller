import React, { Component } from 'react';
import Chart from "react-apexcharts";
import './DiceRollSection.css';

class DiceRollSection extends Component {
    constructor() {
        super();
        

        this.state = {
            prevNum4: 0,
            prevNum6: 0,
            prevNum8: 0,
            prevNum10: 0,
            prevNum12: 0,
            prevNum20: 0,
            rollResult: 0,
            options: {
                chart: {
                  id: "basic-bar"
                },
                xaxis: {
                  categories: [0]
                }
              },
            series: [
                {
                    name: "series-1",
                    data: [0]
                }
            ]
        };
    }

    calculateRollResult = () => {
        var newRollResult = this.rollDice(this.props.numD4, 4)
                            + this.rollDice(this.props.numD6, 6)
                            + this.rollDice(this.props.numD8, 8)
                            + this.rollDice(this.props.numD10, 10)
                            + this.rollDice(this.props.numD12, 12)
                            + this.rollDice(this.props.numD20, 20);
        this.setState({
            rollResult: newRollResult
        });

        // Change the Apex Charts if the number of dice changed
        if (this.state.prevNum4 !== this.props.numD4 ||
            this.state.prevNum6 !== this.props.numD6 ||
            this.state.prevNum8 !== this.props.numD8 ||
            this.state.prevNum10 !== this.props.numD10 ||
            this.state.prevNum12 !== this.props.numD12 ||
            this.state.prevNum20 !== this.props.numD20) {

            this.setState({
                prevNum4: this.props.numD4,
                prevNum6: this.props.numD6,
                prevNum8: this.props.numD8,
                prevNum10: this.props.numD10,
                prevNum12: this.props.numD12,
                prevNum20: this.props.numD20,
            });

            var newCategories = [];
            var newData = [];
            for (var i = this.calculateRangeMinimum(); i <= this.calculateRangeMaximum(); i++) {
                newCategories.push(i);
                newData.push(0);
            }

            var index = (newRollResult - this.calculateRangeMinimum());
            
            newData[index] += 1;

            this.setState({
                options: {
                    xaxis: {
                        categories: newCategories
                    }
                },
                series: [
                    {
                      data: newData
                    }
                ]
            })
        }
        else {
            var newFrequency = this.state.series[0].data.slice();
            var index = (newRollResult - this.calculateRangeMinimum());
            
            newFrequency[index] += 1;

            console.log(newFrequency);

            this.setState({
                series: [
                    {
                        data: newFrequency
                    }
                ]
            });
        }
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
            resultD4 = this.props.numD4 * 4;
        }
        else {
            resultD4 = this.props.numD4;

        }

        // Calculate numD6 result
        if (this.props.numD6 < 0) {
            resultD6 = this.props.numD6 * 6;
        }
        else {
            resultD6 = this.props.numD6;

        }

        // Calculate numD8 result
        if (this.props.numD8 < 0) {
            resultD8 = this.props.numD8 * 8;
        }
        else {
            resultD8 = this.props.numD8;

        }

        // Calculate numD10 result
        if (this.props.numD10 < 0) {
            resultD10 = this.props.numD10 * 10;
        }
        else {
            resultD10 = this.props.numD10;

        }

        // Calculate numD12 result
        if (this.props.numD12 < 0) {
            resultD12 = this.props.numD12 * 12;
        }
        else {
            resultD12 = this.props.numD12;

        }

        // Calculate numD20 result
        if (this.props.numD20 < 0) {
            resultD20 = this.props.numD20 * 20;
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
        if (this.props.numD4 > 0) {
            resultD4 = this.props.numD4 * 4;
        }
        else {
            resultD4 = this.props.numD4;
        }

        // Calculate numD6 result
        if (this.props.numD6 > 0) {
            resultD6 = this.props.numD6 * 6;
        }
        else {
            resultD6 = this.props.numD6;
        }

        // Calculate numD8 result
        if (this.props.numD8 > 0) {
            resultD8 = this.props.numD8 * 8
        }
        else {
            resultD8 = this.props.numD8;

        }

        // Calculate numD10 result
        if (this.props.numD10 > 0) {
            resultD10 = this.props.numD10 * 10;
        }
        else {
            resultD10 = this.props.numD10;

        }

        // Calculate numD12 result
        if (this.props.numD12 > 0) {
            resultD12 = this.props.numD12 * 12;
        }
        else {
            resultD12 = this.props.numD12;

        }

        // Calculate numD20 result
        if (this.props.numD20 > 0) {
            resultD20 = this.props.numD20 * 20;
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