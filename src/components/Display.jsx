import React from 'react';
import PropTypes from 'prop-types';

<<<<<<< HEAD
const Display = ({ result }) => (
  <div>
    {result}
  </div>
);
=======
const Display = ({result}) => {
  return (
    <div className='result-wrapper'>
      {result}
    </div>
  );
}
>>>>>>> c7a3baa... Add class name for the result wrapper

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
