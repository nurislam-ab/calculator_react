import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName) {
    this.setState(calculate(btnName));
  }

  render() {
    return (
      <div className="calc-container">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

<<<<<<< HEAD
export default App;
=======
  render() {
    return (
      <div className='calc-container'>
        <Display />
        <ButtonPanel />
      </div>
    )
  }
}

export default App;
>>>>>>> 23c235e... Fix typo mistake
