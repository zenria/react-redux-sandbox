// @flow
import {connect} from 'react-redux';
import type {State} from './reducers';
import {loadData} from './actions';
import React from 'react';
import Button from '../commons/Button'

const mapStateToProps = (state: State) => ({
    disabled: state.showLoading
})
const mapDispatchToProps = (dispatch: Function) => ({
    onClick: () => {
        dispatch(loadData());
    }
})

const LoadButton = connect(mapStateToProps,mapDispatchToProps)(Button);

export default LoadButton;
