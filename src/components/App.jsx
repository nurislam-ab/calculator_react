import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  constructor() {
    super()
  }

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