// Any digit was pressed
export const digitWasPressed = digit => ({ type: 'DIGIT_PRESSED', digit });
export const operatorWasPressed = operator => ({ type: 'OPERATOR_PRESSED', operator });
export const equalsWasPressed = () => ({ type: 'EQUALS_PRESSED' });
export const backspace = () => ({ type: 'BACKSPACE_PRESSED' });
export const clearAll = () => ({ type: 'CLEAR_ALL' });
export const parenWasPressed = paren => ({ type: 'PAREN_PRESSED', paren });
export const periodWasPressed = () => ({ type: 'PERIOD_PRESSED' });
