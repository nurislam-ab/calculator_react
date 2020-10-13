import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, color, wide }) => {
  const styles = (btnWidth, btnColor) => {
    const wideValue = (btnWidth) ? 'calc(50% + 3px)' : '25%';

    return ({
      flex: wideValue,
      backgroundColor: btnColor,
    });
  };

  return (
    <div className="btn" style={styles(wide, color)}>
      {name}
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  name: '0',
  color: '#f5913e',
  wide: false,
};

export default Button;
