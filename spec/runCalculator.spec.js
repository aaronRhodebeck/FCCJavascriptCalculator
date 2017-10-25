import calculate from '../app/reducers/runCalculator';

describe('runCalculator', () => {
  const actions = {
    digit: { type: 'DIGIT_PRESSED', digit: '' },
    operator: { type: 'OPERATOR_PRESSED', operator: '' },
    period: { type: 'PERIOD_PRESSED' },
    equals: { type: 'EQUALS_PRESSED' },
    clearAll: { type: 'CLEAR_ALL' },
  };
  const operators = ['-', '+', '*', '/'];
  const defaultState = {
    formula: '',
    total: 0,
    currentEntry: '0',
    showEntry: false,
  };
  const defaultAction = { type: '' };

  it('should return an object that represents the state of the app', () => {
    const state = undefined;
    Object.keys(actions).forEach((action) => {
      expect(Object.keys(calculate(state, actions[action]))).toEqual([
        'formula',
        'total',
        'currentEntry',
        'showEntry',
      ]);
    });
  });
  it('should return an object where the total is correct for the formula', () => {
    const randomNumber = (Math.random() * 100).toFixed(3);
    // Creates a formula using a random 5 digit number *00.000* that should
    // always equal the random number - 1;
    const formula = `${randomNumber}*${randomNumber}-${randomNumber}/${randomNumber}`;
    const state = { formula, total: 0, currentEntry: `${randomNumber}` };
    expect(calculate(state, defaultAction).total).toBeCloseTo(randomNumber - 1, 3);
  });

  describe('When a digit is pressed', () => {
    const action = actions.digit;

    it('should update the formula', () => {
      const state = { formula: '10+20-30+', currentTotal: 60, currentEntry: '0' };
      for (let i = 0; i < 10; i++) {
        action.digit = i;
        expect(calculate(state, action).formula).toBe(state.formula.concat(i));
      }
    });
    it('should update the total', () => {
      const state = { formula: '10+20-30+', total: 0, currentEntry: '0' };
      for (let i = 0; i < 10; i++) {
        action.digit = i;
        expect(calculate(state, action).total).toBe(i);
      }
    });
    it('should update the current entry', () => {
      const state = { formula: '10+20+30+', total: 60, currentEntry: '0' };
      expect(calculate(state, action).currentEntry).toBe(action.digit.toString());
    });
    it('should update set showEntry to true', () => {
      const state = Object.create(defaultState);
      state.showEntry = false;
      expect(calculate(state, action).showEntry).toBe(true);
    });
  });

  describe('When an operator is pressed', () => {
    const action = actions.operator;

    it('should update the formula', () => {
      const state = { formula: '2', total: 2, currentEntry: '2' };
      for (let i = 0, len = operators.length; i < len; i++) {
        action.operator = operators[i];
        expect(calculate(state, action).formula).toBe(`2${operators[i]}`);
      }
    });
    it('should set showEntry to false', () => {
      const state = Object.create(defaultState);
      state.showEntry = true;
      expect(calculate(state, action).showEntry).toBe(false);
    });
    it('should change the current entry to "0"', () => {
      const state = { formula: '21', total: 21, currentEntry: '21' };
      expect(calculate(state, action).currentEntry).toBe('0');
    });
    it('should add - if the formula is empty', () => {
      action.operator = '-';
      expect(calculate(defaultState, action).formula).toBe('-');
    });
    it('should ignore other operators when the formula and total are empty', () => {
      for (let i = 1, len = operators.length; i < len; i++) {
        action.operator = operators[i];
        expect(calculate(defaultState, action).formula).toBe('');
      }
    });
    it('should change the operator when an operator is the last thing in the formula', () => {
      const state = { formula: '10+20+', total: 30, currentEntry: '30' };
      for (let i = 0, len = operators.length; i < len; i++) {
        action.operator = operators[i];
        expect(calculate(state, action).formula).toBe(`10+20${operators[i]}`);
      }
    });
    it('should not change the total when an operator is pressed', () => {
      const state = { formula: '10+20', total: 30, currentEntry: '20' };
      for (let i = 0, len = operators.length; i < len; i++) {
        action.operator = operators[i];
        expect(calculate(state, action).total).toBe(30);
      }
    });
  });

  describe('When decimal point is pressed', () => {
    const action = actions.period;

    it('should append a decimal point to the formula', () => {
      const state = { formula: '12.3+25', total: '37.3', currentEntry: '25' };
      expect(calculate(state, action).formula).toBe(state.formula.concat('.'));
    });
    it('should set showEntry to true', () => {
      const state = Object.create(defaultState);
      state.showEntry = false;
      expect(calculate(state, action).showEntry).toBe(true);
    });
    it('should not change the total', () => {
      const state = { formula: '20-15', total: 5, currentEntry: '15' };
      expect(calculate(state, action).total).toBe(5);
    });
    it('should update the current entry', () => {
      const state = { formula: '25*11', total: 275, currentEntry: '11' };
      expect(calculate(state, action).currentEntry).toBe(state.currentEntry.concat('.'));
    });
    it('should not append a decimal point if the formula ends with a decimal number', () => {
      const state = { formula: '23.3', total: 65.98, currentEntry: '42.98' };
      expect(calculate(state, action).formula).toBe(state.formula);
    });
    it('should not change the current entry if the formula ends with a decimal number', () => {
      const state = { formula: '42-22.5', total: 19.5, currentEntry: '19.5' };
      expect(calculate(state, action).currentEntry).toBe(state.currentEntry);
    });
    it('should append "0." if the formula ends in an operator', () => {
      const state = { formula: '42+', total: 42, currentEntry: '0' };
      expect(calculate(state, action).formula).toBe(state.formula.concat('0.'));
    });
    it('should change the formula to "0." if there is no formula', () => {
      const state = defaultState;
      expect(calculate(state, action).formula).toBe('0.');
    });
    it('should change the current entry to "0." if there is no formula', () => {
      const state = defaultState;
      expect(calculate(state, action).currentEntry).toBe('0.');
    });
    it('should change the current entry to "0." if the formula ends in an operator', () => {
      const state = { formula: '33/', total: 33, currentEntry: '0' };
      expect(calculate(state, action).currentEntry).toBe('0.');
    });
  });

  describe('When clear all is pressed', () => {
    const action = actions.clearAll;
    it('should return the default state', () => {
      const state = { formula: '20+30-4', total: 44, currentEntry: '4' };
      expect(calculate(state, action)).toEqual(defaultState);
    });
  });
});
