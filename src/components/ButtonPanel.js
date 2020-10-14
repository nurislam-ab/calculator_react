import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = props => {
  const btnNamesArr = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  const orangeBtns = ['÷', 'x', '-', '+', '='];

  const btnsGroup = (btnGroup => btnGroup.map(btn => {
    let btnComponent;
    if (orangeBtns.includes(btn)) {
      btnComponent = <Button key={btn[0]} name={btn} />;
    } else if (btn === '0') {
      btnComponent = <Button key={btn[0]} name={btn} color="#E0E0E0" wide />;
    } else {
      btnComponent = <Button key={btn[0]} name={btn} color="#E0E0E0" />;
    }

    return btnComponent;
  }));

  const handeClick = (btnName => props.clickHandler(btnName));

  const btnsArr = btnNamesArr.map(group => <div key={group[0]} className="btn-group">{btnsGroup(group)}</div>);

  return (
    <div className="btn-groups-wrapper">{btnsArr}</div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
