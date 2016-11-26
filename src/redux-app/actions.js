import { createAction } from 'redux-actions';

type NoPayloadAction = {
    type: string
}
type BooleanPayloadAction = {
    type: string,
    payload: boolean
}
export type StringPayloadAction = {
    type: string,
    payload: string
}
export type StringArrayPayloadAction = {
    type: string,
    payload: string[]
}
export type NumberPayloadAction = {
    type: string,
    payload: number
}

export const SET_CHECKBOX = "SET_CHECKBOX";
export const setCheckbox: (_:boolean)=> BooleanPayloadAction = createAction(SET_CHECKBOX);

export const SHOW_LOADING = "SHOW_LOADING";
export const showLoading: (_:boolean)=> BooleanPayloadAction = createAction(SHOW_LOADING);

export const DATA_LOADED =  "DATA_LOADED";
export const dataLoaded: (_:data) => StringPayloadAction = createAction(DATA_LOADED);
