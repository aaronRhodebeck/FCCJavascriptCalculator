import digits from './digits';
import period from './period';
import operators from './operators';

const formula = (state = {}, action) => {
  const currentFormula = state.formula ? state.formula : '';
  switch (action.type) {
    case 'DIGIT_PRESSED':
      return digits(currentFormula, action);
    case 'PERIOD_PRESSED':
      return period(currentFormula, action);
    case 'OPERATOR_PRESSED':
      return operators(currentFormula, action);
    default:
      return '';
  }
};

export default formula;
