import React, { Component } from 'react';
import './SiteHeader.css';

class SiteHeader extends Component {

    render () {
        return (
            <div class="jumbotron">
                <h1 className='--dark-red'>Dice!</h1>
                <p class="lead">This is a dice calculator for tabletop games.</p>
                <p>It can do more than simple d20 rolls, like calculating average damage against a target's AC given a weapon.</p>
                <p>Check out the examples.</p>
            </div>
        );
    }
}

export default SiteHeader;