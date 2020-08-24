import React from 'react';
import './App.css';
import Num from './components/Num'
import Btn from './components/Btn'

function App() {
  return (
    <div className="App">
      <Btn>-</Btn>
      <Num/>
      <Btn>+</Btn>
    </div>
  );
}

export default App;
