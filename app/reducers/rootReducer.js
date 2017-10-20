// #region imports
import { combineReducers } from 'redux';
// import all reducers from app
import digits from './digits';
import operators from './operators';
import period from './period';
// #endregion

const rootReducer = combineReducers({ digits, operators, period });
export default rootReducer;
