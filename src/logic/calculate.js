import operate from './operate';

const calculate = (calculator, btnName) => {
  let { total, next, operation } = calculator;

  switch (btnName) {
    case 'A/C':
      total = null;
      next = null;
      operation = null;
      break;
    case '+/-':
      total = total ? operate(total, '1', '+/-') : total;
      next = next ? operate(next, '1', '+/-') : next;
      break;
    case ['+', '-', 'X', '÷', '%'].includes(btnName):
      if (operation) {
        total = operate(total, next, operation);
        next = null;
        operation = btnName;
      } else {
        operation = btnName;
      }
      break;
    case '.':
      if (operation) {
        next = next ? next + btnName : '0.';
      } else {
        total = total ? total + btnName : '0.';
      }
      break;
    case '=':
      if (operation && next) {
        total = total ? operate(total, next, operation) : total;
        next = null;
        operation = null;
      }
      break;
    default:
      if (operation) {
        next = next ? next + btnName : btnName;
      } else {
        total = total ? total + btnName : btnName;
      }
  }

  return {
    total,
    next,
    operation,
  };
};

export default calculate;
