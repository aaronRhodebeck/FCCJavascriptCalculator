const calculateTotal = (formulaString) => {
  const nonDigits = /([^0-9])/;
  const formulaArray = formulaString.split(nonDigits);
  if (formulaArray.length === 1) {
    return undefined;
  }

  const total = 0;
  for (let i = 0, len = formulaArray.length; i < len; i++) {}
};
export default calculateTotal;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
