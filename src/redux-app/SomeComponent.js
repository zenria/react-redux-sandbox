import React, {Component} from "react"
import DataDisplayer from './DataDisplayer'
import Checkbox from './Checkbox'

const SomeComponent = () => (
    <div className="SomeComponent">
        <div className="title">Wow!</div>
        <div className="content">
            <DataDisplayer />
        </div>
        <div className="options">
            <Checkbox/>
        </div>
    </div>
)
export default SomeComponent
