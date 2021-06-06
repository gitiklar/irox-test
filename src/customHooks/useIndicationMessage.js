import { useEffect } from "react";
import { message } from 'antd';

const useIndicationMessage = () => {
    const indicationMessage = { type: '', message:'', key:'xxx', };
    //const indicationMessage = useSelector(state => state.userReducer.indicationMessage);   

    useEffect(()=> {
        if(!indicationMessage.message) return;
        indicationMessage.type === 'error' && message.error({ content: indicationMessage.message, key:indicationMessage.key, duration: 3 });
        indicationMessage.type === 'info' && message.info({ content: indicationMessage.message, key:indicationMessage.key, duration: 3 });
        indicationMessage.type === 'success' && message.success({ content: indicationMessage.message, key:indicationMessage.key, duration: 3 });
    } , [indicationMessage.message]);
}

export default useIndicationMessage;