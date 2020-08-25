import React from 'react';
import './App.css';
import Num from './components/Num'
import Btn from './components/Btn'
import BtnAsync from './components/BtnAsync'

function App() {
  return (
    <div className="App">
      <Btn>-</Btn>
      <Num/>
      <Btn>+</Btn>
      <BtnAsync/>
    </div>
  );
}

export default App;
