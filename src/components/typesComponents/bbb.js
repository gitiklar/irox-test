import React from 'react';

const Bbb = ({amountOfSelectedType , row}) => {

    return (
        <>
            <div>Amount of selected type: {amountOfSelectedType}</div>
            <h1>Bbb component</h1>
            <div>name: {row.name}</div>
            <div>start date: {row.startDate}</div>
            <div>end date: {row.endDate}</div>
        </>
    )
}

export default Bbb;