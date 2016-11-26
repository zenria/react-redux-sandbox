import React, {Component} from 'react'
import DisplayIfCond from '../commons/DisplayIfCond'
import Checkbox from "../commons/Checkbox"
import Button from "../commons/Button"
import DataDisplayer from "../commons/DataDisplayer"
import fetchData from '../commons/dataFetcher'
import SomeComponent from './SomeComponent'

class PlainOldReactApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            checked: false,
            showLoading: false,
            data: null
        };
    }

    onCheckBoxChange = (e) => {
        this.setCheckboxState(e.target.checked)
    }

    setCheckboxState = (checked) => {
        this.setState({
            checked: checked
        })
    }

    loadData = (e) => {
        if(this.state.showLoading){
            return;
        }
        this.setState({
            showLoading: true
        })
        fetchData().then(function(data){
            this.setState({
                data: data,
                showLoading: false
            });
        }.bind(this));

    }

    render() {
        return (
            <div className="App">
                <p>
                    One check box... <Checkbox checked={this.state.checked} onChange={this.onCheckBoxChange}/>
                </p>
                <p>
                    ...linked to this one <Checkbox checked={this.state.checked} onChange={this.onCheckBoxChange}/>, because it is the same ;)
                </p>
                <DisplayIfCond cond={this.state.checked}>
                    <p>Hello, you checked the checkbox!</p>
                </DisplayIfCond>
                <p>
                    <Button text="Load data" disabled={this.state.showLoading} onClick={this.loadData}/>
                </p>
                <SomeComponent loading={this.state.showLoading} data={this.state.data} checked={this.state.checked} onChangeCheckbox={this.setCheckboxState}/>
            </div>
        );
    }
}
export default PlainOldReactApp;
