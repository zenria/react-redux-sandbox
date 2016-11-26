// @flow
import {connect} from 'react-redux';
import type {State} from './reducers';
import {setCheckbox} from './actions';
import React from 'react';
import _Checkbox from '../commons/Checkbox'

const mapStateToProps = (state: State) => ({
    checked: state.checkboxChecked
})
const mapDispatchToProps = (dispatch: Function) => ({
    onChange: (e: SyntheticInputEvent) => {
        dispatch(setCheckbox(e.target.checked));
    }
})

const Checkbox = connect(mapStateToProps,mapDispatchToProps)(_Checkbox);

export default Checkbox;
