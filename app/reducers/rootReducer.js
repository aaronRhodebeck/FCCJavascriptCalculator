// #region imports
import { combineReducers } from 'redux';
// import all reducers from app
import formula from './formula';
import currentTotal from './currentTotal';
// #endregion

const rootReducer = combineReducers({ formula, currentTotal });
export default rootReducer;
