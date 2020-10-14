import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    name,
    color,
    wide,
    clickHandler,
  } = props;

  const styles = (btnWidth, btnColor) => {
    const wideValue = (btnWidth) ? 'calc(50% + 3px)' : '25%';

    return ({
      flex: wideValue,
      backgroundColor: btnColor,
    });
  };

  const handleClick = (btnName => clickHandler(btnName));

  return (
    <button className="btn" style={styles(wide, color)} onClick={e => handleClick(e.target.value)} value={name} type="submit">
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: '#f5913e',
  wide: false,
};

export default Button;
