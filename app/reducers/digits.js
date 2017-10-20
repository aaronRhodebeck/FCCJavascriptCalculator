import calculateTotal from './calculateTotal';

function digits(state = {}, action) {
  if (action.type === 'DIGIT_PRESSED') {
    let formula = state.formula === undefined ? '' : state.formula;
    formula = formula.concat(action.digit);
    return { currentTotal: calculateTotal(formula), formula };
  }
  return state;
}
export default digits;
