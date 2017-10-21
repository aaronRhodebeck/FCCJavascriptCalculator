import * as actions from '../app/actions/actionCreators';
// import reducers
import formula from '../app/reducers/formula';
import currentTotal from '../app/reducers/currentTotal';

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
  //   // #region Sample stores and actions
  //   // Setup sample state stores for tests to call
  //   const emptyStore = undefined;
  //   const smallFormulaStore = { currentTotal: 20, formula: '5+4+6+15-10' };
  //   // Setup sample actions
  //   const digitPressed = { type: 'DIGIT_PRESSED', digit: '8' };
  //   const plusPressed = { type: 'OPERATOR_PRESSED', operator: '+' };
  //   const dividePressed = { type: 'OPERATOR_PRESSED', operator: '/' };
  //   const periodPressed = { type: 'PERIOD_PRESSED' };
  //   // #endregion

  // All the acceptable inputs, to loop over for tests
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const operators = ['+', '-', '*', '/'];

  describe('formula()', () => {
    it('should return a string', () => {
      expect(typeof formula({}, {})).toEqual('string');
    });
    it('should add a digit if there is no formula already in the store', () => {
      const store = {};
      for (let i = 0, len = digits.length; i < len; i++) {
        const action = { type: 'DIGIT_PRESSED', digit: digits[i] };
        expect(formula(store, action)).toEqual(digits[i].toString());
      }
    });
    it('should append a digit if there is a formula in the store', () => {
      const store = { formula: '5-6+89', currentTotal: 88 };
      for (let i = 0, len = digits.length; i < len; i++) {
        const action = { type: 'DIGIT_PRESSED', digit: digits[i] };
        expect(formula(store, action)).toBe(store.formula.concat(digits[i]));
      }
    });
    it('should add the operator to the formula if there is not an operator already at the end', () => {
      const store = { formula: '1+3-2', total: 0 };
      for (let i = 0, len = operators.length; i < len; i++) {
        const action = { type: 'OPERATOR_PRESSED', operator: operators[i] };
        expect(formula(store, action)).toEqual(store.formula.concat(action.operator));
      }
    });
    it('should change the operator if the formula already ends in an operator', () => {
      const store = { formula: '4+5+', currentTotal: 9 };
      for (let i = 0, len = operators.length; i < len; i++) {
        const action = { type: 'OPERATOR_PRESSED', operator: operators[i] };
        expect(formula(store, action)).toBe(store.formula.slice(0, -1).concat(operators[i]));
      }
    });
    it('should append a decimal point if there is an integer at the end of the formula', () => {
      const store = { formula: '10+45', currentTotal: 55 };
      const action = { type: 'PERIOD_PRESSED' };
      expect(formula(store, action)).toBe(store.formula.concat('.'));
    });
    it('should not append a decimal point if the number at the end already has a decimal point', () => {
      const store = { formula: '12.5 + 16.3', currentTotal: 28.8 };
      const action = { type: 'PERIOD_PRESSED' };
      expect(formula(store, action)).toBe(store.formula);
    });
    it('should append a 0 and a decimal point if the store is empty', () => {
      const store = {};
      const action = { type: 'PERIOD_PRESSED' };
      expect(formula(store, action)).toBe('0.');
    });
    it('should append a 0 and a decimal point if there is an operator at the end of the formula', () => {
      const store = { formula: '3-4*', total: -1 };
      const action = { type: 'PERIOD_PRESSED' };
      expect(formula(store, action)).toBe(store.formula.concat('0.'));
    });
    it('should return 0- if the there is no formula and the minus sign is pressed', () => {
      const store = {};
      const action = { type: 'OPERATOR_PRESSED', operator: '-' };
      expect(formula(store, action)).toBe('0-');
    });
    it('should ignore operators other than - if the store is empty', () => {
      const store = {};
      const action = { type: 'OPERATOR_PRESSED', operator: '*' };
      expect(formula(store, action)).toBe('');
    });
  });

  describe('currentTotal()', () => {
    it('should return the digit if the store is empty and a digit is pressed', () => {
      const store = {};
      for (let i = 0, len = digits.length; i < len; i++) {
        const action = { type: 'DIGIT_PRESSED', digit: digits[i] };
        expect(currentTotal(store, action)).toBe(digits[i]);
      }
    });
    it('should update the total when a digit is pressed', () => {
      const store = { formula: '10+90', currentTotal: 100 };
      const action = { type: 'DIGIT_PRESSED', digit: 8 };
      expect(currentTotal(store, action)).toBe(918);
    });
    it('should return the correct total for the formula that is in the store', () => {
      const store = { formula: '40+30-20/10', currentTotal: 0 };
      const action = { type: 'DIGIT_PRESSED', digit: 9 };
      expect(currentTotal(store, action));
    });
    it('should return the same total when an operator is pressed', () => {
      const store = { formula: '10+32', currentTotal: 42 };
      const action = { type: 'OPERATOR_PRESSED', operator: '-' };
      expect(currentTotal(store, action)).toBe(store.currentTotal);
    });
    it('should return the same total when period is pressed', () => {
      const store = { formula: '10+32', currentTotal: 42 };
      const action = { type: 'PERIOD_PRESSED' };
      expect(currentTotal(store, action)).toBe(store.currentTotal);
    });
  });
});
