const splitFormula = (formulaString) => {
  const nonDigitsOrDecimalPoint = /([^0-9.])/;
  return formulaString.split(nonDigitsOrDecimalPoint);
};

const lastEntryIsAnInteger = (formulaString) => {
  const formulaArray = splitFormula(formulaString);
  return Number.isInteger(parseFloat(formulaArray[formulaArray.length - 1]));
};

const lastEntryIsNotADigitOrDecimalPoint = (formulaString) => {
  const formulaArray = splitFormula(formulaString);
  // If the last character is not a digit or a decimal point
  // an empty string will is added after the last character
  return formulaArray[formulaArray.length - 1] === '';
};

const period = (state = {}, action) => {
  if (action.type === 'PERIOD_PRESSED') {
    const newState = { formula: '', currentTotal: state.currentTotal };
    if (state.formula === undefined) {
      newState.formula = '0.';
    } else if (lastEntryIsAnInteger(state.formula)) {
      newState.formula = state.formula.concat('.');
    } else if (lastEntryIsNotADigitOrDecimalPoint(state.formula)) {
      newState.formula = state.formula.concat('0.');
    } else {
      newState.formula = state.formula;
    }
    return newState;
  }
  return state;
};

export default period;
