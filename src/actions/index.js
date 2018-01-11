import axios from 'axios';
import apiPath from '../config';

export const fetchData = (token) => {
    return function(dispatch){
        dispatch({
            type: 'DATA_FETCHING'
        });
        axios.get(apiPath + 'auth/spreadsheet', {headers: {'x-access-token': token}}).then(res => {
            dispatch({
                type: 'DATA_FETCHED',
                payload: res.data
            });
        });
    };
};

export const login = (formData) => {
    return function (dispatch) {
        dispatch({
            type: 'LOGGING_IN'
        });
        axios.post(apiPath + 'login', formData).then(res => {
            dispatch({
                type: 'LOGGED_IN',
                payload: res.data
            })
        }).catch(err => {
            console.log(err.response.data.message);
            dispatch({
                type: 'LOGIN_ERROR'
            })
        });
    }
};

export const signup = (formData) => {
    return function (dispatch) {
        axios.post(apiPath + 'signup', formData).then(res => {
            dispatch({
                type: 'LOGGED_IN',
                payload: res.data
            })
        }).catch(err => {
            console.log(err.response.data.message);
            dispatch({
                type: 'SIGNUP_ERROR'
            })
        });
    }
};

export const signOut = () => {
    return ({
        type: 'SIGN_OUT'
    });
};

export const addColumn = (sheetId, token) => {
    return function (dispatch) {
        axios.post(apiPath + 'auth/columns/add', {sheetId: sheetId}, {headers: {'x-access-token': token}}).then(res => {
            dispatch({
                type: 'ADD_COLUMN',
                payload: res.data.data
            });
        });
    };
};

export const updateColumn = (data, token) => {
    return function (dispatch) {
        axios.put(apiPath + 'auth/columns/update', data, {headers: {'x-access-token': token}}).then(res => {
            dispatch({
                type: 'UPDATE_COLUMN',
                payload: res.data.data
            });
        });
    };
};

export const deleteColumn = (data, token) => {
    return function (dispatch) {
        axios.delete(apiPath + 'auth/columns/delete', {data: data, headers: {'x-access-token': token}}).then(res => {
            dispatch({
                type: 'DELETE_COLUMN',
                payload: res.data.data
            });
        });
    }
};

export const addRow = (sheetId, token) => {
    return function (dispatch) {
        axios.post(apiPath + 'auth/rows/add', {sheetId: sheetId}, {headers: {'x-access-token': token}}).then(res => {
            dispatch({
                type: 'ADD_ROW',
                payload: res.data.data
            })
        })
    }
};

export const deleteRow = (data, token) => {
    return function (dispatch) {
        axios.delete(apiPath + 'auth/rows/delete', {data: data, headers: {'x-access-token': token}}).then(res => {
            dispatch({
                type: 'DELETE_ROW',
                payload: res.data.data
            });
        });
    }
};

export const updateCell = (data, token) => {
    return function(dispatch) {
        axios.put(apiPath + 'auth/cells/update', data, {headers: {'x-access-token': token}}).then(res =>{
            dispatch({
                type: 'UPDATE_CELL',
                payload: res.data.data
            });
        });
    };
};