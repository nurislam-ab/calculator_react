import operate from './operate';

const calculate = ((calculator, btnName) => {
  let { total, next, operation } = calculator;

  switch (btnName) {
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '+/-':
      total = total ? operate(total, '1', '+/-') : total;
      next = next ? operate(next, '1', '+/-') : next;
      break;
    case ['÷', 'x', '+', '-'].includes(btnName) && btnName:
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
    case '%':
      operation = btnName;
      total = operate(total, '0', operation);
      next = null;
      break;
    case '=':
      if (operation && next) {
        total = operate(total, next, operation);
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
});

export default calculate;
