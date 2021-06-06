import React from 'react';
import 'antd/dist/antd.css';
import { Table, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import {  updateSelectedRow } from '../redux/actions';


const AntdTable = () => {
    const dispatch = useDispatch();
    const jsonData = useSelector(state => state.tableDataReducer.jsonData);    

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
        <Table columns={columns} dataSource={jsonData}  pagination={{ pageSize: 5 }} onRow={(record, rowIndex) => {
                                                                                            return {
                                                                                                onClick: e => updateSelectedRowHandler(record),
                                                                                            };
                                                                                        }}/>
    );
}

export default AntdTable;