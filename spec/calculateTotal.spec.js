import calculateTotal from '../app/reducers/calculateTotal';

describe('currentTotal()', () => {
  it('should return zero if the formula string is blank', () => {
    expect(calculateTotal('')).toBe(0);
  });
  it('should return the number if there are no operators', () => {
    expect(calculateTotal('123')).toEqual(123);
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
