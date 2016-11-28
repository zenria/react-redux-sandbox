import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReduxApp from './redux-app/ReduxApp'
import PlainOldReactApp from './std-app/PlainOldReactApp'
import Loading from './commons/Loading'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            plainOldReactAppLoading: false,
            reduxAppLoading: false
        }
    }

    onPlainOldReactAppLoading = (loading) => this.setState({
        plainOldReactAppLoading: loading
    })

    onReduxAppLoading = (loading) => this.setState({
        reduxAppLoading: loading
    })


    render() {
        return (
            <div className="root">
                <div className="app">
                    <div>
                        Redux:
                        <ReduxApp onLoading={this.onReduxAppLoading}/>
                    </div>
                    <div>
                        External Loading:
                        <Loading loading={this.state.reduxAppLoading}/>
                    </div>
                </div>
                <div className="app">
                    <div>
                        Plain React
                        <PlainOldReactApp onLoading={this.onPlainOldReactAppLoading}/>
                    </div>
                    <div>
                        External Loading:
                        <Loading loading={this.state.plainOldReactAppLoading}/>
                    </div>
                </div>
        </div>
        );
    }
}

export default App;
