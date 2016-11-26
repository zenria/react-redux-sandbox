import { handleAction } from 'redux-actions';
import {combineReducers, applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from './sagas'
import createLogger from 'redux-logger';
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

const reducers = combineReducers({
    checkboxChecked,
    showLoading,
    data,
    somethingConstant: identityReducer
})

export const createAndInitStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducers, {
        checkboxChecked: false,
        somethingConstant: "This will never change."
    }, applyMiddleware(createLogger(), sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    return store;
}
