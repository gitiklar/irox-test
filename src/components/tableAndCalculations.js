import React from 'react';
import 'antd/dist/antd.css';
import { Upload , Tooltip } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import addIcon from '../../styles/images/addIcon.jpg';
import AntdTable from './antdTable';
import Ccc from './typesComponents/ccc';
import Aaa from './typesComponents/aaa';
import Bbb from './typesComponents/bbb';
import { updateJsonData } from '../redux/actions';
const componentsByTypeObj = { Aaa,  Bbb, Ccc };

const TableAndCalculations = () => {
    const dispatch = useDispatch();
    const amountOfSelectedType = useSelector(state => state.tableDataReducer.amountOfSelectedType);
    const selectedRow = useSelector(state => state.tableDataReducer.selectedRow); let RelevantComponent = null;
    selectedRow && (RelevantComponent = componentsByTypeObj[selectedRow.type.charAt(0).toUpperCase() + selectedRow.type.slice(1)]);

    return (
        <div className="innerContainer">
            <div className="calculationsContainer">
                <div>Row summary:</div>
                <div>{selectedRow && <RelevantComponent amountOfSelectedType={amountOfSelectedType} row={selectedRow}/>}</div>
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
            </div>   
        </div>
    );
};

export default TableAndCalculations;