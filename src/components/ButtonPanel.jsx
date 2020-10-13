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
<<<<<<< HEAD
    <div className="btn-groups-wrapper">{btnsArr}</div>
  );
};
=======
    <div className='btn-groups-wrapper'>
      <div className="group-1 btn-group">
        <Button name="AC" color='#E0E0E0'/>
        <Button name="+/-" color='#E0E0E0'/>
        <Button name="%" color='#E0E0E0'/>
        <Button name="÷"/>
      </div>
      <div className="group-2 btn-group">
        <Button name="7" color='#E0E0E0'/>
        <Button name="8" color='#E0E0E0'/>
        <Button name="9" color='#E0E0E0'/>
        <Button name="x"/>
      </div>
      <div className="group-3 btn-group">
        <Button name="4" color='#E0E0E0'/>
        <Button name="5" color='#E0E0E0'/>
        <Button name="6" color='#E0E0E0'/>
        <Button name="-"/>
      </div>
      <div className="group-4 btn-group">
        <Button name="1" color='#e0e0e0'/>
        <Button name="2" color='#E0E0E0'/>
        <Button name="3" color='#E0E0E0'/>
        <Button name="+"/>
      </div>
      <div className="group-5 btn-group">
        <Button name="0" color='#E0E0E0' wide={true}/>
        <Button name="." color='#E0E0E0'/>
        <Button name="="/>
      </div>
    </div>
  )
}
>>>>>>> 776b201... Change Button components rendering

export default ButtonPanel;
