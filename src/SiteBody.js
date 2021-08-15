import React, { Component } from 'react';
import CounterComponent from './CounterComponent';
import './SiteBody.css';

class SiteBody extends Component {

    render () {
        return (
            <div class="site-body">
                <div className="counter-grid">
                    <CounterComponent diceText="d4"/>
                    <CounterComponent diceText="d6"/>
                    <CounterComponent diceText="d8"/>
                    <CounterComponent diceText="d10"/>
                    <CounterComponent diceText="d12"/>
                    <CounterComponent diceText="d20"/>
                </div>
                
            </div>
        );
    }
}

export default SiteBody;