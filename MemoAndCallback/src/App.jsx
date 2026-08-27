import React from 'react'
import {useState} from 'react'
import Sum from './components/Sum.jsx'
const App = () => {
    const [counter, setCounter] = useState(0);
    console.log('App re-render')

    function bigLoop(){
      for(let i=0; i<1e7; i++){

      }
    }

    const var1 = bigLoop();
  return (
    <div>
        <h1>Counter</h1>
        <p>{counter}</p>
        <button onClick={()=>setCounter(counter+1)}>Increment</button>
        <Sum number={counter}/>
        <h1>{var1}</h1>
    </div>
  )
}

export default App