
const initialState = {
    fetching: true,
    sheetData: {},
    rowData: [],
    columnData: []
};

export default (state = initialState, action) => {
    switch (action.type){
        case 'DATA_FETCHING':
            return {...state, fetching: true};
        case 'DATA_FETCHED':
            return {...state, fetching: false, sheetData: action.payload, rowData: action.payload.rowData, columnData: action.payload.columnData};
        case 'ADD_COLUMN':
            return {...state, columnData: [...state.columnData, action.payload]};
        case 'UPDATE_COLUMN':
            return {...state, columnData: action.payload};
        case 'DELETE_COLUMN':
            return {...state, columnData: action.payload};
        case 'DELETE_ROW':
            return {...state, rowData: action.payload};
        case 'ADD_ROW':
            return {...state, rowData: [...state.rowData, action.payload]};
        case 'UPDATE_CELL':
            return {...state, rowData: action.payload};
        default:
            return state;
    }
}
