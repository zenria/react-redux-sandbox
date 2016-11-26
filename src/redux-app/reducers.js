import { handleAction } from 'redux-actions';
import {combineReducers} from 'redux';
import {
    SET_CHECKBOX,
    SHOW_LOADING,
    DATA_LOADED
} from './actions.js'
type State = {
    checkboxChecked: boolean
}

const createPayloadIdendityReducer = (actionType: string, defaultState: any) => {
	return handleAction(actionType, (state, action) => action.payload, defaultState)
}

const identityReducer = (state, action) => state?state:null;

const checkboxChecked = createPayloadIdendityReducer(SET_CHECKBOX, false);

const showLoading = createPayloadIdendityReducer(SHOW_LOADING, false);

const data = createPayloadIdendityReducer(DATA_LOADED, null);

export const reducers = combineReducers({
    checkboxChecked,
    showLoading,
    data,
    somethingConstant: identityReducer
})
