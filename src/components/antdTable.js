import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { Table, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { getDurationHoursBetweenDates, getAdditionalInformationFromRow ,updateJsonData, updateSelectedRow } from '../redux/actions';


const AntdTable = () => {
    const dispatch = useDispatch();
    const jsonData = useSelector(state => state.tableDataReducer.jsonData);    

    const data = jsonData.map((row, index)=>({key:index  ,...row , 
                                              DurationHours: getDurationHoursBetweenDates(row.EventFrom , row.EventTo),
                                              AdditionalInformation: getAdditionalInformationFromRow(row),
                                            }));

    useEffect(()=>{
        dispatch(updateJsonData(data));
    },[]);

    const updateSelectedRowHandler = record => dispatch(updateSelectedRow(record));

    const columns = [
        { title: 'Target', dataIndex: 'EventTarget', key: 'EventTarget', },
        { title: 'Event Type', dataIndex: 'EventType', key: 'EventType', },
        { title: 'Name', dataIndex: 'EventName', key: 'EventName', },
        { title: 'From', dataIndex: 'EventFrom', key: 'EventFrom', },
        { title: 'To', dataIndex: 'EventTo', key: 'EventTo', },
        { title: 'Duration Hours', dataIndex: 'DurationHours', key: 'DurationHours', },
        { title: 'Additional Information' , dataIndex: 'AdditionalInformation', key: 'AdditionalInformation', },
        { title: 'Checked', key: 'EventChecked', render: row => ( 
                                                            <Space size="middle">
                                                                  <input type="checkbox" checked = {row.EventChecked==="True"} disabled/>
                                                            </Space>),},];

    return (
        <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }}/>
    );
}

export default AntdTable;



// const columns = [
//     { title: 'Name', dataIndex: 'name', key: 'name', },
//     { title: 'Type', dataIndex: 'type', key: 'type', },
//     { title: 'StartDate', dataIndex: 'startDate', key: 'startDate', },
//     { title: 'EndDate', dataIndex: 'endDate', key: 'endDate', },
//     { title: 'TotalDays' , dataIndex: 'totalDays', key: 'totalDays', },
//     { title: 'Action', key: 'action', render: row => ( 
//                                                         <Space size="middle">
//                                                             <Button onClick={()=>updateSelectedRowHandler(row)}>Summary</Button>
//                                                         </Space>),},];

