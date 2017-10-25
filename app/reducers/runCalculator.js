import calculateTotal from './calculateTotal';
import handleDigits from './handleDigits';
import handleOperators from './handleOperators';
import handleDecimalPoints from './handleDecimalPoint';

// #region Helper methods

// #endregion Helper methods

// #region Main method
const calculate = (state = { formula: '', currentEntry: '0' }, action) => {
  let newState = state;

  switch (action.type) {
    case 'DIGIT_PRESSED':
      newState = handleDigits(state, action.digit);
      break;
    case 'OPERATOR_PRESSED':
      newState = handleOperators(state, action);
      break;
    case 'PERIOD_PRESSED':
      newState = handleDecimalPoints(state);
      break;
    case 'CLEAR_ALL':
      newState = { formula: '', currentEntry: '0' };
      break;
    default:
      break;
  }

  return {
    formula: newState.formula,
    total: calculateTotal(newState.formula),
    currentEntry: newState.currentEntry,
  };
};
// #endregion Main method
export default calculate;
