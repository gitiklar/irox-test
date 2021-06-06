import { combineReducers, createStore } from 'redux';

import tableDataReducer from './reducers/tableDataReducer';

const reducer = combineReducers({ tableDataReducer });

const store = createStore(reducer);
window.store = store;
export default store;