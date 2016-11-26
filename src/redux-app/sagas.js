import { put, call, select } from 'redux-saga/effects';
import { takeEvery} from 'redux-saga'
import { showLoading, LOAD_DATA, dataLoaded} from "./actions";
import type {State} from "./reducers";
import ReactDOM from 'react-dom';
import fetchData from '../commons/dataFetcher'

function *loadData(){
    const state = yield select();
    if(state.showLoading){
        return;
    }
    yield put(showLoading(true));
    const data = yield call(fetchData);
    yield put(dataLoaded(data))
    yield put(showLoading(false));
}

export function *rootSaga(){
    yield takeEvery(LOAD_DATA, loadData);
}
