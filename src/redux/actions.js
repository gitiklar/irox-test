export const UPDATE_JSON_DATA = 'UPDATE_JSON_DATA';
export const UPDATE_SELECTED_ROW = 'UPDATE_SELECTED_ROW';

export const updateJsonData = data => {
    return { type: UPDATE_JSON_DATA , payload: data };
}

export const updateSelectedRow = row => {
    return { type: UPDATE_SELECTED_ROW , payload: row };
}

export const getDurationHoursBetweenDates = (startDate , endDate) => {

    const [ startDay , startMonth , startYear , startHour, startMinute, startSecond ] = startDate.split(/[- / . :]/);
    const startDateObj =  new Date(startYear , startMonth , startDay , startHour, startMinute, startSecond);

    const [ endDay , endMonth , endYear , endHour, endMinute, endSecond ] = endDate.split(/[- : / .]/);
    const endDateObj =  new Date(endYear , endMonth , endDay , endHour, endMinute, endSecond);

    const diffDates = new Date(endDateObj - startDateObj).toISOString().substr(11, 8);

    return diffDates;
}

export const getAdditionalInformationFromRow = row => {
    const arrayOfHardCodedKeys = ['-ID' , 'EventTarget' , 'EventType' , 'EventName' , 'EventFrom' , 'EventTo' , 'EventChecked' , 'key' , 'DurationHours'];
    const additionalKeys = Object.keys(row).filter(key=>!arrayOfHardCodedKeys.includes(key));
    return additionalKeys.map(key=>`${key}: ${row[key]}`).join(' , ');
}