import produce from 'immer';
import { UPDATE_JSON_DATA , UPDATE_SELECTED_ROW, UPDATE_JSON_DATA_AFTER_ADDITIONALS } from '../actions';

const initialState = {
    jsonData: [],
    selectedRow: null,
    summary: null,
};

export default produce((state , action) => {
    switch(action.type) {
        case UPDATE_JSON_DATA:
            state.jsonData = action.payload.jsonData;
            state.summary = action.payload.summary;
            break;
        case UPDATE_JSON_DATA_AFTER_ADDITIONALS:
            state.jsonData = action.payload;
            break;
        case UPDATE_SELECTED_ROW: 
            state.selectedRow = action.payload;
            break;
    }
} , initialState);