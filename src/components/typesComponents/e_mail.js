import React from 'react';

const E_Mail = ({row}) => {

    return (
        <>
            <h1>E-Mail</h1>
            <div>AttachmentCount: {row.AttachmentCount}</div>
            <div>CC: {row.CC}</div>
        </>
    )
}

export default E_Mail;