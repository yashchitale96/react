import React from 'react'
import {useState, useRef} from 'react'
import Login from './Login';

const App = () => {
  const [time, setTime] = useState(0);
  const intervalIdRef = useRef(null);

  let intervalId = null;

  function handleStart(){
    if(intervalIdRef.current != null){
      return;
    }
    intervalIdRef.current = setInterval(() => {
      setTime(time=>time+1)
    }, 1000);
  }

  function handleStop(){
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
  }

  function handleReset(){
    clearInterval(intervalIdRef.current)
    setTime(0);
    intervalIdRef.current = null;
  }


  return (
    <div>
      <h1>StopWatch: {time} </h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>

      <Login></Login>
    </div>
  )
}

export default App