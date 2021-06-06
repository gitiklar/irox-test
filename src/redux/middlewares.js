import { UPDATE_JSON_DATA, getDurationHoursBetweenDates, getAdditionalInformationFromRow } from "./actions";

export const updateAdditionalsMiddleware = store => next => action => {
    if(action.type !== UPDATE_JSON_DATA) return next(action);
    const jsonData = action.payload;
    const data = jsonData.map((row, index)=>({key:index  ,...row , 
        DurationHours: getDurationHoursBetweenDates(row.EventFrom , row.EventTo),
        AdditionalInformation: getAdditionalInformationFromRow(row),
    }));
    action.payload = data;
    return next(action);
};

export const updateSummaryDataMiddleware = store => next => action => {
    if(action.type !== UPDATE_JSON_DATA) return next(action);
    const jsonData = action.payload;
    const summary = {}; const countObj = {};
    summary['eventCount'] = jsonData.length;
    summary['checkedEventCount'] = jsonData.filter(row=>row.EventChecked==="True").length;
    jsonData.forEach(row => countObj[row.EventName] ? countObj[row.EventName].count++: countObj[row.EventName] = {type: row.EventType , count: 1 });
    const maximumDuplicationName = Object.keys(countObj).reduce((p, c) => countObj[p].count > countObj[c].count ? p : c);
    summary['maximumDuplication'] = {...countObj[maximumDuplicationName], name: maximumDuplicationName};
    action.payload = { jsonData , summary };
    return next(action);
};