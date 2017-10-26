const operatorPressedFirst = (operator) => {
  if (operator === '-') {
    return '-';
  }
  return '';
};
const formulaDoesNotEndWithDigit = formula => formula.match(/[^0-9.]$/) !== null;
const changeOperatorAtEnd = (formula, operator) => formula.slice(0, -1).concat(operator);
const appendOperatorTo = (formula, operator) => formula.concat(operator);

const handleOperators = (state, action) => {
  let { formula, currentEntry } = state;
  const { showFormula, total } = state;

  currentEntry = '0';
  if (state.formula === '') {
    formula = operatorPressedFirst(action.operator);
  } else if (formulaDoesNotEndWithDigit(formula)) {
    formula = changeOperatorAtEnd(formula, action.operator);
  } else if (showFormula === false) {
    formula = total.toString().concat(action.operator);
  } else {
    formula = appendOperatorTo(formula, action.operator);
  }
  return { formula, total, currentEntry };
};

export default handleOperators;
