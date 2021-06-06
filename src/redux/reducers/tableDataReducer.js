import produce from 'immer';
import { UPDATE_JSON_DATA , UPDATE_SELECTED_ROW } from '../actions';

const initialState = {
    jsonData: [],
    selectedRow: null,
    summary: null,
};

export default produce((state , action) => {
    switch(action.type) {
        case UPDATE_JSON_DATA:
            state.jsonData = action.payload;
            state.summary = getSummary(state.jsonData);
            break;
        case UPDATE_SELECTED_ROW: 
            state.selectedRow = action.payload;
            break;
    }
} , initialState);

const getSummary = jsonData => {
    const summary = {}; const countObj = {}
    summary['eventCount'] = jsonData.length;
    summary['checkedEventCount'] = jsonData.filter(row=>row.EventChecked==="True").length;
    jsonData.forEach(row => countObj[row.EventName] ? countObj[row.EventName].count++: countObj[row.EventName] = {type: row.EventType , count: 1 });
    const maximumDuplicationName = Object.keys(countObj).reduce((p, c) => countObj[p].count > countObj[c].count ? p : c);
    summary['maximumDuplication'] = {...countObj[maximumDuplicationName], name: maximumDuplicationName};
    return summary;
}