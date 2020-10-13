import Big from 'big.js';

const operate = (nOne, nTwo, operation) => {
  const bOne = Big(nOne);
  const bTwo = Big(nTwo);
  let result;

  switch (operation) {
    case '+':
      result = bOne.plus(bTwo);
      break;
    case '-':
      result = bOne.minus(bTwo);
      break;
    case 'x':
      result = bOne.mul(bTwo);
      break;
    case '/':
      result = bTwo === '0' ? 'undefined' : bOne.div(bTwo);
      break;
    case '%':
      result = bOne.mul(bTwo).div(100);
      break;
    case '+/-':
      result = bOne.mul(-1);
      break;
    default:
      result = '';
  }

  return result;
};

export default operate;
