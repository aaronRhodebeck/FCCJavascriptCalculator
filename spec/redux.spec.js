import * as actions from '../app/actions/actionCreators';

describe('Action Creators', () => {
  it('should contain a "digit was pressed" action which contains the digit', () => {
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0, len = digits.length; i < len; i++) {
      const digit = digits[i];
      const expectedAction = {
        type: 'DIGIT_PRESSED',
        digit,
      };
      expect(actions.digitWasPressed(digit)).toEqual(expectedAction);
    }
  });
  it('should contain an "operator was pressed" action which contains the operator', () => {
    const operators = ['+', '-', '*', '/'];
    for (let i = 0, len = operators.length; i < len; i++) {
      const operator = operators[i];
      const expectedAction = {
        type: 'OPERATOR_PRESSED',
        operator,
      };
      expect(actions.operatorWasPressed(operator)).toEqual(expectedAction);
    }
  });
  it('should contain an "equals was pressed" action', () => {
    const expectedAction = {
      type: 'EQUALS_PRESSED',
    };
    expect(actions.equalsWasPressed()).toEqual(expectedAction);
  });
  it('should contain a "backspace" action', () => {
    const expectedAction = {
      type: 'BACKSPACE_PRESSED',
    };
    expect(actions.backspace()).toEqual(expectedAction);
  });
  it('should contain a "clear all" action', () => {
    const expectedAction = {
      type: 'CLEAR_ALL',
    };
    expect(actions.clearAll()).toEqual(expectedAction);
  });
});
