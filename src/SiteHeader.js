import React, { Component } from 'react';
import './SiteHeader.css';

class SiteHeader extends Component {

    render () {
        return (
            <div className="jumbotron">
                <h1 className='white tc'>Dice Analyzer</h1>
                <p className="white tc">This is a dice roller / analyzer for tabletop games.</p>
                <p className="white tc"> Select how many dice you want and either roll them or analyze the frequency of outcomes</p>
            </div>
        );
    }
}

export default SiteHeader;