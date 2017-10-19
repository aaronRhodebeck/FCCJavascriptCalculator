const performOperation = (number, currentTotal, operator) => {
  switch (operator) {
    case '+':
      return currentTotal + number;
    case '-':
      return currentTotal - number;
    case '*':
      return currentTotal * number;
    case '/':
      return currentTotal / number;
    default:
      return currentTotal;
  }
};

const calculateTotal = (formulaString) => {
  const nonDigits = /([^0-9])/;
  const formulaArray = formulaString.split(nonDigits);

  // If there is no operator, the total cannnot be calculated
  if (formulaArray.length === 1) {
    return undefined;
  }

  let total = parseInt(formulaArray[0], 10);
  let nextOperator = '';
  for (let i = 1, len = formulaArray.length; i < len; i++) {
    if (Number.isNaN(parseInt(formulaArray[i], 10))) {
      // Save the number to perform an operation on
      nextOperator = formulaArray[i];
    } else {
      const number = parseInt(formulaArray[i], 10);
      total = performOperation(number, total, nextOperator);
    }
  }
  return total;
};
export default calculateTotal;
