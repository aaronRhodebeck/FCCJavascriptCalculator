import calculateTotal from './calculateTotal';
import handleDigits from './handleDigits';
import handleOperators from './handleOperators';
import handleDecimalPoints from './handleDecimalPoint';

const calculate = (state = { formula: '', currentEntry: '0' }, action) => {
  let newState = state;
  let showEntry = state.showEntry ? state.showEntry : false;

  switch (action.type) {
    case 'DIGIT_PRESSED':
      newState = handleDigits(state, action.digit);
      showEntry = true;
      break;
    case 'OPERATOR_PRESSED':
      newState = handleOperators(state, action);
      showEntry = false;
      break;
    case 'PERIOD_PRESSED':
      newState = handleDecimalPoints(state);
      showEntry = true;
      break;
    case 'CLEAR_ALL':
      newState = { formula: '', currentEntry: '0' };
      showEntry = false;
      break;
    default:
      break;
  }
  return {
    formula: newState.formula,
    total: calculateTotal(newState.formula),
    currentEntry: newState.currentEntry,
    showEntry,
  };
};
export default calculate;
