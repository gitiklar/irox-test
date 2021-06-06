import React from 'react';

const Phone = ({row}) => {

    return (
        <div className="typeComponent">
            <h1>Phone Event</h1>
            <div><b>Record File : </b>{row.RecordFile}</div>
        </div>
    )
}

export default Phone;