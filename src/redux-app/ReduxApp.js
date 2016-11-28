import React, { Component } from 'react';
import { Provider,connect } from 'react-redux';
import {createAndInitStore} from "./reducers";
import Checkbox from './Checkbox'
import DisplayIfChecked from './DisplayIfChecked'
import LoadButton from './LoadButton'
import SomeComponent from './SomeComponent'

const registerOnLoadingListener = (store, onLoading) => {
    if(typeof(onLoading)!=="function"){
        return;
    }
    let prevLoading = store.getState().showLoading;
    store.subscribe(() => {
        const newLoading = store.getState().showLoading;
        if(newLoading != prevLoading){
            onLoading(newLoading);
            prevLoading = newLoading;
        }
    })
}


class ReduxApp extends Component {
    constructor(props){
        super(props);
        const store = createAndInitStore()
        this.state = {
            store:  store
        }
        registerOnLoadingListener(store, props.onLoading);
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
                <SomeComponent/>
            </div>
        </Provider>
    );
  }
}

export default ReduxApp;
