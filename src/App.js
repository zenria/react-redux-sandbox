import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReduxApp from './redux-app/ReduxApp'
import PlainOldReactApp from './std-app/PlainOldReactApp'

class App extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="root">
                <div className="app">
                    Redux:
                    <ReduxApp/>
                </div>
                <div className="app">
                    Plain React
                    <PlainOldReactApp/>
                </div>
        </div>
        );
    }
}

export default App;
