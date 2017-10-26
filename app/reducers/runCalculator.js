import calculateTotal from './calculateTotal';
import handleDigits from './handleDigits';
import handleOperators from './handleOperators';
import handleDecimalPoints from './handleDecimalPoint';
import handleBackspace from './handleBackspace';

const calculate = (state = { formula: '', currentEntry: '0' }, action) => {
  let newState = state;
  let showEntry = state.showEntry ? state.showEntry : false;
  let showFormula = true;

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
    case 'BACKSPACE_PRESSED':
      newState = handleBackspace(state);
      showEntry = true;
      break;
    case 'CLEAR_ALL':
      newState = { formula: '', currentEntry: '0' };
      showEntry = false;
      break;
    case 'EQUALS_PRESSED':
      showEntry = false;
      // Used to indicate equals was last button pressed
      showFormula = false;
      break;
    default:
      break;
  }
  return {
    formula: newState.formula,
    total: calculateTotal(newState.formula),
    currentEntry: newState.currentEntry,
    showEntry,
    showFormula,
  };
};
export default calculate;
