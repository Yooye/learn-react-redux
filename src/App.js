import React from 'react';
import './App.css';
import Num from './components/Num'
import Btn from './components/Btn'
import AsyncBtn from './components/AsyncBtn'

function App() {
  return (
    <div className="App">
      <Btn>-</Btn>
      <Num/>
      <Btn>+</Btn>
      <AsyncBtn/>
    </div>
  );
}

export default App;
