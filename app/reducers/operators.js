const checkForOperator = char => char === '+' || '-' || '/' || '*';
const changeOperatorAtEnd = (formula, newOperator) =>
  formula.slice(0, formula.length - 1).concat(newOperator);
const handleLeadingOperator = (operator) => {
  if (operator === '-') {
    return '0-';
  }
  return '';
};

const operators = (formula, action) => {
  if (action.type !== 'OPERATOR_PRESSED') {
    return formula;
  }

  let newFormula = '';
  if (formula === '' || formula === undefined) {
    newFormula = handleLeadingOperator(action.operator);
  } else if (checkForOperator(formula.slice(-1)) === true) {
    newFormula = changeOperatorAtEnd(formula, action.operator);
  } else {
    newFormula = formula.concat(action.operator);
  }
  return newFormula;
};

export default operators;
