import React, { Component } from 'react';
import CounterComponent from './CounterComponent';
import './SiteBody.css';

class SiteBody extends Component {

    render () {
        return (
            <div class="site-body">
                <div className="counter-grid">
                    <CounterComponent />
                    <CounterComponent />
                    <CounterComponent />
                    <CounterComponent />
                    <CounterComponent />
                    <CounterComponent />
                </div>
                
            </div>
        );
    }
}

export default SiteBody;