import React, { Component } from 'react';
import './App.css';

import Routes from './Routes';

class App extends Component {

    render() {
        return (<div className="site container-fluid">
            <Routes />
        </div>);
    }

}

export default App;
