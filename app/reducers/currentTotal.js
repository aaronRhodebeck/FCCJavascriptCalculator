import calculateTotal from './calculateTotal';
import digits from './digits';

const currentTotal = (state = {}, action) => {
  let formula = state.formula ? state.formula : '';
  if (action.type === 'DIGIT_PRESSED') {
    formula = digits(formula, action);
    return calculateTotal(formula);
  }
  return calculateTotal(formula);
};

export default currentTotal;
