import calculateTotal from './calculateTotal';

function digits(state = {}, action) {
  if (action.type === 'DIGIT_PRESSED') {
    return { total: calculateTotal(state.formula), formula: state.formula.concat(action.digit) };
  }
  return state;
}
export default digits;
