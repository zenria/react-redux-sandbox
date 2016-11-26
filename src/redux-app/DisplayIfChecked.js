// @flow
import {connect} from 'react-redux';
import type {State} from './reducers';
import React from 'react';
import DisplayIfCond from '../commons/DisplayIfCond'

const mapStateToProps = (state: State) => ({
    cond: state.checkboxChecked
})

const DisplayIfChecked = connect(mapStateToProps,null)(DisplayIfCond);
export default DisplayIfChecked;
