import React, {Component} from "react"
import DataDisplayer from '../commons/DataDisplayer'
import Checkbox from '../commons/Checkbox'

class SomeComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            checked: props.checked
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.checked!=this.state.checked){
            this.setState({
                checked: nextProps.checked
            })
        }
    }

    onCheckBoxChange = (e) => {
        this.setState({
            checked: e.target.checked
        }, function(){
            if(this.props.onChangeCheckbox){
                this.props.onChangeCheckbox(this.state.checked)
            }
        })
    }

    render() {
        return (
            <div className="SomeComponent">
                <div className="title">Wow!</div>
                <div className="content">
                    <DataDisplayer data={this.props.data} loading={this.props.loading}/>
                </div>
                <div className="options">
                    <Checkbox checked={this.state.checked} onChange={this.onCheckBoxChange}/>
                </div>
            </div>
        )
    }
}
export default SomeComponent
