const handleBackspace = (state) => {
  let { currentEntry, formula } = state;
  if (currentEntry === '0') {
    return state;
  }
  formula = formula.slice(0, -1);
  currentEntry = currentEntry.slice(0, -1);
  return Object.assign({}, state, { formula, currentEntry });
};

export default handleBackspace;
