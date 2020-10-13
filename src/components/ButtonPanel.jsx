import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  const btnNamesArr = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  const btnsGroup = (btnGroup => btnGroup.map(btn => <Button key={btn[0]} name={btn} />));

  const btnsArr = btnNamesArr.map(group => <div key={group[0]} className="btn-group">{btnsGroup(group)}</div>);

  return (
    <div className="btn-groups-wrapper">{btnsArr}</div>
  );
};

export default ButtonPanel;
