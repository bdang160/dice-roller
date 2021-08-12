import React, { Component } from 'react';
import CounterComponent from './CounterComponent';
import './SiteBody.css';

class SiteBody extends Component {

    render () {
        return (
            <div class="site-body">
                <CounterComponent />
            </div>
        );
    }
}

export default SiteBody;