import * as actions from '../app/actions/actionCreators';
// import reducers
import digits from '../app/reducers/digits';
import calculateTotal from '../app/reducers/calculateTotal';
import operators from '../app/reducers/operators';
import period from '../app/reducers/period';

describe('Action Creators', () => {
  it('should contain a "digit was pressed" action which contains the digit', () => {
    const allDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0, len = allDigits.length; i < len; i++) {
      const digit = allDigits[i];
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
  it('should contain a "period was pressed" action', () => {
    const expectedAction = { type: 'PERIOD_PRESSED' };
    expect(actions.periodWasPressed()).toEqual(expectedAction);
  });
});

describe('Reducers', () => {
  // #region Sample stores and actions
  // Setup sample state stores for tests to call
  const emptyStore = undefined;
  const smallFormulaStore = { currentTotal: 20, formula: '5+4+6+15-10' };
  const noOperatorStore = { currentTotal: undefined, formula: '25' };
  // Setup sample actions
  const digitPressed = { type: 'DIGIT_PRESSED', digit: 8 };
  const plusPressed = { type: 'OPERATOR_PRESSED', operator: '+' };
  const dividePressed = { type: 'OPERATOR_PRESSED', operator: '/' };
  const periodPressed = { type: 'PERIOD_PRESSED' };
  // #endregion

  describe('calculateTotal()', () => {
    it('should return undefined if there are no operators', () => {
      expect(calculateTotal('123')).toBeUndefined();
    });
    it('should return the sum of two integers when there is a single +', () => {
      expect(calculateTotal('1+2')).toEqual(3);
    });
    it('should return the difference of two integers', () => {
      expect(calculateTotal('5-3')).toEqual(2);
    });
    it('should return a negative number if the difference is less than 0', () => {
      expect(calculateTotal('2-5')).toEqual(-3);
    });
    it('should return the product of two numbers if there is a single *', () => {
      expect(calculateTotal('3*5')).toEqual(15);
    });
    it('should return the quotient of two numbers if there is a single /', () => {
      expect(calculateTotal('12/4')).toEqual(3);
    });
    it('should return the correct total from a formula with basic arithmatic, ignoring the order of operations', () => {
      expect(calculateTotal('10/5*2+20-10')).toEqual(14);
    });
    it('should return a decimal number when necessary', () => {
      expect(calculateTotal('5/2')).toEqual(2.5);
    });
    it('should accept a decimal number and return the correct total', () => {
      expect(calculateTotal('2.5*10')).toEqual(25);
    });
    it('should accept a negative number as the first number and return the correct total', () => {
      expect(calculateTotal('-2*5')).toEqual(-10);
    });
    it('should return an error message if it tries to divide by 0', () => {
      expect(calculateTotal('5/0')).toEqual('ERROR');
    });
  });

  describe('digits()', () => {
    it('should return an empty object if the store does not exist and the type is not "DIGIT_PRESSED"', () => {
      expect(digits(emptyStore, plusPressed)).toEqual({});
    });
    it('should return the same object if the type is not "DIGIT_PRESSED"', () => {
      expect(digits(smallFormulaStore, plusPressed)).toEqual(smallFormulaStore);
    });
    it('should append the pressed digit to the current formula', () => {
      expect(digits(smallFormulaStore, digitPressed).formula).toEqual(smallFormulaStore.formula + digitPressed.digit);
    });
    it('should leave total undefined if there are no operators in the formula', () => {
      expect(digits(noOperatorStore, digitPressed).currentTotal).toBe(undefined);
    });
  });

  describe('operators()', () => {
    it('should return an empty object if the store does not exist and the type is not "OPERATOR_PRESSED"', () => {
      expect(operators(emptyStore, digitPressed)).toEqual({});
    });
    it('should return the same object if the action type is not "OPERATOR_PRESSED', () => {
      expect(operators(smallFormulaStore, digitPressed)).toEqual(smallFormulaStore);
    });
    it('should return a new object if the action type is "OPERATOR_PRESSED"', () => {
      expect(operators(smallFormulaStore, plusPressed)).not.toBe(smallFormulaStore);
    });
    it('should add the operator to the formula if there is not an operator already at the end', () => {
      expect(operators(smallFormulaStore, plusPressed).formula).toEqual(smallFormulaStore.formula.concat('+'));
      expect(operators(smallFormulaStore, dividePressed).formula).toEqual(smallFormulaStore.formula.concat('/'));
    });
    it('should change the operator if the formula ends in an operator', () => {
      const store = { formula: '10+30-20+', total: 20 };
      expect(operators(store, dividePressed).formula).toEqual('10+30-20/');
    });
    it('should return the same total', () => {
      expect(operators(smallFormulaStore, dividePressed).currentTotal).toEqual(smallFormulaStore.currentTotal);
    });
  });

  describe('period()', () => {
    it('should return an empty object if the store is empty and the type is not "PERIOD_PRESSED', () => {
      expect(period(emptyStore, digitPressed)).toEqual({});
    });
    it('should return the same object if the type is not "PERIOD_PRESSED"', () => {
      expect(period(smallFormulaStore, digitPressed)).toEqual(smallFormulaStore);
    });
    it('should return the formula with a decimal point appended if the last entry is an integer', () => {
      expect(period(smallFormulaStore, periodPressed).formula).toEqual(smallFormulaStore.formula.concat('.'));
    });
    it('should add a 0 and a decimal point if the store is empty', () => {
      expect(period(emptyStore, periodPressed).formula).toEqual('0.');
    });
    it('should add a 0 and a decimal point if the last entry is an operator', () => {
      const store = { formula: '10-5+12*', currentTotal: 17 };
      expect(period(store, periodPressed).formula).toEqual(store.formula.concat('0.'));
    });
    it('should not add a decimal point if the last entry is a decimal number', () => {
      const store = { formula: '1+2+4.5', currentTotal: 7.5 };
      expect(period(store, periodPressed).formula).toEqual(store.formula);
    });
  });
});
