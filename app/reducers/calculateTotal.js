const performOperation = (number, currentTotal, operator) => {
  switch (operator) {
    case '+':
      return currentTotal + number;
    case '-':
      return currentTotal - number;
    case '*':
      return currentTotal * number;
    case '/':
      if (number === 0) {
        return 'ERROR';
      }
      return currentTotal / number;
    default:
      return currentTotal;
  }
};

const splitOnNonNumbers = (str) => {
  const nonDigitsOrDecimalPoint = /([^0-9.])/;
  return str.split(nonDigitsOrDecimalPoint);
};

const handleLeadingMinusSign = (formulaArray) => {
  if (formulaArray[0] === '' && formulaArray[1] === '-') {
    formulaArray.unshift(0);
  }
  return formulaArray;
};

const createArray = (formulaAsString) => {
  let formulaAsArray = splitOnNonNumbers(formulaAsString);
  formulaAsArray = handleLeadingMinusSign(formulaAsArray);
  return formulaAsArray;
};

const calculateTotal = (formulaString) => {
  const formulaArray = createArray(formulaString);

  // If there is no operator, then return the string as a number
  if (formulaArray.length === 1) {
    return parseFloat(formulaString);
  }

  // Set the running total to the first number
  let total = parseFloat(formulaArray[0], 10);
  let nextOperator = '';

  // Loop through the array and perform operations
  for (let i = 1, len = formulaArray.length; i < len; i++) {
    if (Number.isNaN(parseFloat(formulaArray[i], 10))) {
      // Save the number to perform an operation on
      nextOperator = formulaArray[i];
    } else {
      const number = parseFloat(formulaArray[i], 10);
      total = performOperation(number, total, nextOperator);
    }
  }

  return total;
};

export default calculateTotal;
