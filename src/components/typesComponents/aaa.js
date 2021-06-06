import React from 'react';

const Aaa = ({amountOfSelectedType , row}) => {

    return (
        <>
            <div>Amount of selected type: {amountOfSelectedType}</div>
            <h1>Aaa component</h1>
            <div>name: {row.name}</div>
            <div>start date: {row.startDate}</div>
            <div>end date: {row.endDate}</div>
        </>
    )
}

export default Aaa;