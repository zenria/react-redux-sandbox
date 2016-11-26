// @flow
import {connect} from 'react-redux';
import type {State} from './reducers';
import {dataLoaded, showLoading} from './actions';
import React from 'react';
import Button from '../commons/Button';
import fetchData from '../commons/dataFetcher'

const mapStateToProps = (state: State) => ({
    disabled: state.showLoading
})
const mapDispatchToProps = (dispatch: Function) => ({
    onClick: () => {
        // no way here to block if showLoading is already true
        dispatch(showLoading(true));
        fetchData().then((data)=>{
            dispatch(dataLoaded(data));
            dispatch(showLoading(false));
        })
    }
})

const LoadButton = connect(mapStateToProps,mapDispatchToProps)(Button);

export default LoadButton;
