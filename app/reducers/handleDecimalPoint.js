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
const formulaDoesNotEndWithDigit = formula => formula.match(/[^0-9.]$/) !== null;
const appendZeroAndDecimalPoint = formula => formula.concat('0.');
const appendDecimalPointTo = formula => formula.concat('.');
const updateCurrentEntry = (currentEntry, digit) =>
  (currentEntry === '0' ? digit.toString() : currentEntry.concat(digit));

const handleDecimalPoints = (state) => {
  let { formula, currentEntry } = state;
  if (formulaEndsInDecimalNumber(state.formula)) {
    return state;
  } else if (formulaDoesNotEndWithDigit(state.formula) || state.formula === '') {
    formula = appendZeroAndDecimalPoint(state.formula);
    currentEntry = '0.';
  } else {
    formula = appendDecimalPointTo(state.formula);
    currentEntry = updateCurrentEntry(currentEntry, '.');
  }
  return { formula, currentEntry, total: state.total };
};
export default handleDecimalPoints;
