import React from 'react';
import 'antd/dist/antd.css';
import { Upload , Tooltip } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import addIcon from '../../styles/images/addIcon.jpg';
import AntdTable from './antdTable';
import Phone from './typesComponents/phone';
import E_Mail from './typesComponents/e_mail';
import Sms from './typesComponents/sms';
import { updateJsonData } from '../redux/actions';
import Summary from './summary';
const componentsByTypeObj = { Phone ,  "E-Mail" : E_Mail, 'SMS': Sms };

const TableAndCalculations = () => {
    const dispatch = useDispatch();
    const selectedRow = useSelector(state => state.tableDataReducer.selectedRow); 
    let RelevantComponent = null;
    selectedRow && (RelevantComponent = componentsByTypeObj[selectedRow.EventType.replace( /\s/g, '')]);

    return (
        <div className="innerContainer">
            <div className="calculationsContainer">
                <Summary/>
            </div>
            <div className="tableContainer">
                    <Upload accept=".xml,.txt,.json" showUploadList={false} 
                                            beforeUpload={file => {
                                                            const reader = new FileReader();
                                                            reader.onload = e => { 
                                                                const results = e.target.result;
                                                                dispatch(updateJsonData(JSON.parse(results).Events.Event));
                                                            };
                                                            reader.readAsText(file); 
                                                            return false;
                                                        }}>
                    <Tooltip placement="top" title="Choose event file">
                        <img src={addIcon} style={{width:'30px'}}></img>
                    </Tooltip>
                </Upload>
                <AntdTable/>
                {selectedRow && <RelevantComponent row={selectedRow}/>}
            </div>   
        </div>
    );
};

export default TableAndCalculations;