const checkForOperator = char => char === '+' || '-' || '/' || '*';
const changeOperatorAtEnd = (formula, newOperator) =>
  formula.slice(0, formula.length - 1).concat(newOperator);

const operators = (state = {}, action) => {
  if (action.type !== 'OPERATOR_PRESSED') {
    return state;
  }

  let newFormula = '';
  if (checkForOperator(state.formula.slice(-1)) === true) {
    newFormula = changeOperatorAtEnd(state.formula, action.operator);
  } else {
    newFormula = state.formula.concat(action.operator);
  }

  return { formula: newFormula, currentTotal: state.currentTotal };
};

export default operators;
