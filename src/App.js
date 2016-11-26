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
            <div>
                <div>
                    Redux:
                    <ReduxApp/>
                </div>
                <div>
                    Plain React
                    <PlainOldReactApp/>
                </div>
        </div>
        );
    }
}

export default App;
