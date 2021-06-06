import React from 'react';

const E_Mail = ({row}) => {

    return (
        <div className="typeComponent">
            <h1>E-Mail Event</h1>
            <div><b>AttachmentCount : </b>{row.AttachmentCount}</div>
            <div><b>CC : </b>{row.CC}</div>
        </div>
    )
}

export default E_Mail;