import React from 'react';
import PropTypes from 'prop-types';

<<<<<<< HEAD
const Button = ({ name }) => (
  <div>
    {name}
  </div>
);

Button.propTypes = {
  name: PropTypes.string,
};
=======
const Button = ({name, color, wide}) => {
  
  
  const styles = (btnWidth, btnColor) => {
    const wideValue = (btnWidth) ? '2 1 0.5%' : '1';
    
    return ({
      flex: wideValue,
      backgroundColor: btnColor,
    });
  }

  return (
    <div className="btn" style={styles(wide, color)}>
      {name}
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
}

Button.defaultProps = {
  color: '#f5913e',
  wide: false,
}
>>>>>>> 22ba704... Update Buttons component props with color and buttons width

Button.defaultProps = {
  name: '0',
};

export default Button;
