import calculateTotal from './calculateTotal';
import handleOperators from './handleOperators';

// #region Helper methods
const appendDigitTo = (formula, digit) => formula.concat(digit);
const updateCurrentEntry = (currentEntry, digit) =>
  (currentEntry === '0' ? digit.toString() : currentEntry.concat(digit));
const formulaDoesNotEndWithDigit = formula => formula.match(/[^0-9.]$/) !== null;
const appendDecimalPointTo = formula => formula.concat('.');
const formulaEndsInDecimalNumber = (formula) => {
  const array = formula.split(/[^0-9.}]/);
  const lastNumber = parseFloat(array[array.length - 1]);

  if (
    (Number.isInteger(lastNumber) === false && Number.isNaN(lastNumber) === false) ||
    array[array.length - 1].slice(-1) === '.'
  ) {
    return true;
  }
  return false;
};
const appendZeroAndDecimalPoint = formula => formula.concat('0.');
// #endregion Helper methods

// #region Main method
const calculate = (state = { formula: '', currentEntry: '0' }, action) => {
  let newFormula = state.formula;
  let { currentEntry } = state;

  switch (action.type) {
    case 'DIGIT_PRESSED':
      newFormula = appendDigitTo(state.formula, action.digit);
      currentEntry = updateCurrentEntry(state.currentEntry, action.digit);
      break;
    case 'OPERATOR_PRESSED':
      const newState = handleOperators(state, action);
      newFormula = newState.formula;
      currentEntry = newState.currentEntry;
      break;
    case 'PERIOD_PRESSED':
      if (formulaEndsInDecimalNumber(state.formula)) {
        break;
      } else if (formulaDoesNotEndWithDigit(state.formula) || state.formula === '') {
        newFormula = appendZeroAndDecimalPoint(state.formula);
        currentEntry = '0.';
      } else {
        newFormula = appendDecimalPointTo(state.formula);
        currentEntry = updateCurrentEntry(currentEntry, '.');
      }
      break;
    default:
      break;
  }

  return {
    formula: newFormula,
    total: calculateTotal(newFormula) || 0,
    currentEntry,
  };
};
// #endregion Main method
export default calculate;
