import { applyMiddleware, combineReducers, createStore } from 'redux';

import tableDataReducer from './reducers/tableDataReducer';
import { updateAdditionalsMiddleware , updateSummaryDataMiddleware } from './middlewares';

const reducer = combineReducers({ tableDataReducer });

const store = createStore(reducer , applyMiddleware(updateAdditionalsMiddleware , updateSummaryDataMiddleware));
window.store = store;
export default store;