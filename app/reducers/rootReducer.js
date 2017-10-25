// #region imports
import { combineReducers } from 'redux';
// import all reducers from app
import calculate from './runCalculator';
// #endregion

const rootReducer = combineReducers({ calculate });
export default rootReducer;
