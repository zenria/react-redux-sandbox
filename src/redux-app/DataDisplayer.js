// @flow
import {connect} from 'react-redux';
import type {State} from './reducers';
import React from 'react';
import _DataDisplayer from '../commons/DataDisplayer'

const mapStateToProps = (state: State) => ({
    data: state.data,
    loading: state.showLoading
})

const DataDisplayer = connect(mapStateToProps,null)(_DataDisplayer);
export default DataDisplayer;
