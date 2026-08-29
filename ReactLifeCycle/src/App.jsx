import React, { useEffect, useState } from 'react'
import Alpha from './components/Alpha';
import Form from './components/Form';
import Users from './components/Users';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);

  // mounting phase
  useEffect(()=>{
    console.log('Parent Component Mounting....')
  },[])

  // update phase
  useEffect(()=>{
    console.log('Parent Component - State of counter is changed')
  },[counter])

  return (
    <div>
      <button onClick={()=>setCounter(counter+1)}>Increment</button>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter(counter-1)}>Decrement</button>

      {/* {toggle ? <Alpha/> : <Form/>} */}

      {toggle && <Users/>}
      <button onClick={()=>setToggle(!toggle)}>Toggle</button>

    </div>
  )
}

export default App