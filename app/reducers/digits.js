function digits(formula, action) {
  if (action.type === 'DIGIT_PRESSED') {
    return formula.concat(action.digit);
  }
  return formula;
}
export default digits;
