import React from 'react';
// import './App.css';
import Num from './components/Num'
import Btn from './components/Btn'
import BtnAsync from './components/BtnAsync'
import GoodList from './components/GoodList'

function App() {
  return (
    <div className="App">
      {/* <Btn>-</Btn>
      <Num/>
      <Btn>+</Btn>
      <BtnAsync/> */}
      <GoodList/>
    </div>
  );
}

export default App;
