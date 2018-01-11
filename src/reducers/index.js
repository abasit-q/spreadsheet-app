import { combineReducers } from 'redux';
import SpreadsheetReducer from './spreadsheetReducer';
import UserReducer from './userReducer';

export default combineReducers({
    Spreadsheet: SpreadsheetReducer,
    User: UserReducer
});
