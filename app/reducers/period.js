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

const period = (formula, action) => {
  if (action.type === 'PERIOD_PRESSED') {
    let newFormula = formula;
    if (formula === 'undefined') {
      newFormula = '0.';
    } else if (lastEntryIsAnInteger(formula)) {
      newFormula = formula.concat('.');
    } else if (lastEntryIsNotADigitOrDecimalPoint(formula)) {
      newFormula = formula.concat('0.');
    }
    return newFormula;
  }
  return formula;
};

export default period;
