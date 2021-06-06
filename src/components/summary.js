import React from 'react';
import { useSelector } from 'react-redux';


const Summary = () => {
    const summary = useSelector(state => state.tableDataReducer.summary); 
    
    return (
        <div className="">
            {summary && 
                    <>
                        <div>Event Count: {summary.eventCount}</div>
                        <div>Checked Event Count: {summary.checkedEventCount}</div>
                        <div>Maximum duplication: {`${summary.maximumDuplication.type} ${summary.maximumDuplication.name} exists ${summary.maximumDuplication.count} times`}</div>
                    </>
            }
        </div>
    );
};

export default Summary;