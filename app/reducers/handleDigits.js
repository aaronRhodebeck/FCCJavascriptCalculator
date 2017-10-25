const appendDigitTo = (formula, digit) => formula.concat(digit);
const updateCurrentEntry = (currentEntry, digit) =>
  (currentEntry === '0' ? digit.toString() : currentEntry.concat(digit));

const handleDigits = (state, digit) => {
  let { formula, currentEntry } = state;
  formula = appendDigitTo(formula, digit);
  currentEntry = updateCurrentEntry(currentEntry, digit);
  return { formula, currentEntry, total: state.total };
};

export default handleDigits;
