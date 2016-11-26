import React, { Component } from 'react';
import { Provider,connect } from 'react-redux';
import createLogger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import {reducers} from "./reducers";
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from './sagas'
import Checkbox from './Checkbox'
import DisplayIfChecked from './DisplayIfChecked'
import LoadButton from './LoadButton'
import DataDisplayer from './DataDisplayer'

class ReduxApp extends Component {
    constructor(props){
        super(props);
        const sagaMiddleware = createSagaMiddleware();
        this.state = {
            store:  createStore(
                reducers,
                {checkboxChecked: false, somethingConstant: "This will never change."},
                applyMiddleware(createLogger(), sagaMiddleware)
            )
        }
        sagaMiddleware.run(rootSaga);
    }

  render() {
    return (
        <Provider store={this.state.store}>
            <div className="App">
                <p>
                    One check box... <Checkbox />
                </p>
                <p>
                    ...linked to this one <Checkbox/>, because it is the same ;)
                </p>
                <DisplayIfChecked>
                    <p>Hello, you checked the checkbox!</p>
                </DisplayIfChecked>
                <p>
                    <LoadButton text="Load data"/>
                </p>
                <DataDisplayer/>
            </div>
        </Provider>
    );
  }
}

export default ReduxApp;
