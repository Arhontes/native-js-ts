import React from 'react';
import './App.css';


function App() {
  function checkScope() {

    const i = 'function scope';
    for(;;){
      const i = "dfdfd"
    }

    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }

    console.log('Function scope i is: ', i);
    return i;
  }
  checkScope()
  return (
    <div className="App">

    </div>
  );
}

export default App;
