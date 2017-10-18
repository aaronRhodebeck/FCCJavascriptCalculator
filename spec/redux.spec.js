import * as actions from '../app/actions/actionCreators';
// import reducers
import digits from '../app/reducers/digits';
import calculateTotal from '../app/reducers/calculateTotal';

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
  it('should contain a "parenthesis was pressed" action', () => {
    const parentheses = ['(', ')'];
    for (let i = 0, len = parentheses.length; i < len; i++) {
      const paren = parentheses[i];
      const expectedAction = {
        type: 'PAREN_PRESSED',
        paren,
      };
      expect(actions.parenWasPressed(paren)).toEqual(expectedAction);
    }
  });
});

describe('Reducers', () => {
  // Setup sample state stores for tests to call
  const emptyStore = undefined;
  const smallFormulaStore = { currentTotal: 20, formula: '5+4+6+15-10' };
  const noOperatorStore = { currentTotal: undefined, formula: '25' };

  describe('calculateTotal()', () => {
    it('should return undefined if there are no operators', () => {
      expect(calculateTotal('123')).toBeUndefined();
    });
    it('should return two numbers added together when there is a single +', () => {
      expect(calculateTotal('1+2')).toEqual(3);
    });
  });

  describe('digits()', () => {
    // Setup sample actions
    const digitPressed = { type: 'DIGIT_PRESSED', digit: 8 };
    const nonDigitPressed = { type: 'OPERATOR_PRESSED', operator: '+' };

    it('should return an empty object if the store does not exist and the type is not "DIGIT_PRESSED"', () => {
      expect(digits(emptyStore, nonDigitPressed)).toEqual({});
    });
    it('should return the same object if the type is not "DIGIT_PRESSED"', () => {
      expect(digits(smallFormulaStore, nonDigitPressed)).toEqual(smallFormulaStore);
    });
    it('should append the pressed digit to the current formula', () => {
      expect(digits(smallFormulaStore, digitPressed).formula).toEqual(smallFormulaStore.formula + digitPressed.digit);
    });
    it('should leave total undefined if there are no operators in the formula', () => {
      expect(digits(noOperatorStore, digitPressed).currentTotal).toBe(undefined);
    });
  });
});
