import React, { useState } from 'react';
import './App.css';

import Questions from './components/questions';
import Display from './components/display';

function App() {
  const [display, setDisplay] = useState('');
  const [index, setIndex] = useState(0);

  const displayHandler = (question, index) => {
    setDisplay(question);
    setIndex(index + 1);
  }

  const buttonHandler = () => {
    setDisplay('');
  }

  return (
    <div className="App">

      {display ? <Display isDisplay={display} index={index} buttonHandler={buttonHandler} /> : <Questions handleDisplay={displayHandler} />}

    </div>
  )
}

export default App;
