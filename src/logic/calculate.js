
const calculate = (calculator, btnName) => {
  let { total, next, operation } = calculator

  if (btnName === '+/-') {
    total = total * -1;
    next = next * -1
  }
}

export { calculate };