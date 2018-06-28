import { combineReducers } from 'redux';
import deptReducer from './deptReducer';
import empReducer from './empReducer';
import userDetailsReducer from './userDetailsReducer';


const rootReducer = combineReducers({ deptStore: deptReducer, empStore: empReducer, user: userDetailsReducer });
export default rootReducer;
