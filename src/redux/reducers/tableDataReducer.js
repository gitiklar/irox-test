import produce from 'immer';
import { UPDATE_JSON_DATA , UPDATE_SELECTED_ROW } from '../actions';

const initialState = {
    jsonData: [],
    amountOfSelectedType: null,
    selectedRow: null,
};

export default produce((state , action) => {
    switch(action.type) {
        case UPDATE_JSON_DATA: 
            state.jsonData = action.payload;
            break;
        case UPDATE_SELECTED_ROW: 
            state.selectedRow = action.payload;
            state.amountOfSelectedType = state.jsonData.filter(row => row.type === action.payload.type).length;
            break;
    }
} , initialState);
























/*
function getDate() {
    return new Date(+ (new Date()) - Math.floor(Math.random()*10000000000));
}

const initialState = {
   jsonData: [
        { name: 'f', type: 'aaa', startDate: getDate().toLocaleDateString() , endDate: getDate().toLocaleDateString() },
        { name: 'g', type: 'bbb', startDate: getDate().toLocaleDateString() , endDate: getDate().toLocaleDateString() },
        { name: 'h', type: 'ccc', startDate: getDate().toLocaleDateString() , endDate: getDate().toLocaleDateString() },
        { name: 'i', type: 'ccc', startDate: getDate().toLocaleDateString() , endDate: getDate().toLocaleDateString() },
        { name: 'j', type: 'aaa', startDate: getDate().toLocaleDateString() , endDate: getDate().toLocaleDateString() },
        { name: 'k', type: 'ccc', startDate: getDate().toLocaleDateString() , endDate: getDate().toLocaleDateString() },
        { name: 'l', type: 'bbb', startDate: getDate().toLocaleDateString() , endDate: getDate().toLocaleDateString() },
        { name: 'm', type: 'aaa', startDate: getDate().toLocaleDateString() , endDate: getDate().toLocaleDateString() },
        { name: 'n', type: 'aaa', startDate: getDate().toLocaleDateString() , endDate: getDate().toLocaleDateString() },
        { name: 'o', type: 'bbb', startDate: getDate().toLocaleDateString() , endDate: getDate().toLocaleDateString() },
        { name: 'p', type: 'aaa', startDate: getDate().toLocaleDateString() , endDate: getDate().toLocaleDateString() },
        { name: 'q', type: 'aaa', startDate: getDate().toLocaleDateString() , endDate: getDate().toLocaleDateString() },
        { name: 'r', type: 'ccc', startDate: getDate().toLocaleDateString() , endDate: getDate().toLocaleDateString() },
        { name: 's', type: 'aaa', startDate: getDate().toLocaleDateString() , endDate: getDate().toLocaleDateString() },
    ],
    amountOfSelectedType: null,
    selectedRow: null,
};

console.log(initialState.jsonData);
*/