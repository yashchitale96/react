import React from 'react'
import {useState} from 'react'
import Sum from './components/Sum.jsx'
const App = () => {
    const [counter, setCounter] = useState(0);
    const [number, setNumber] = useState(0);
    console.log('App re-render')

    const prime = useMemo(()=>{
    
    let total = 0;

    if(number>1)
      total++;

    for(let i=3;i<=number;i++){
      total++;
      for(let j=2;j<i;j++){
        if(i%j==0){
          total--;
          break;
        }
      }
    }

    return total;

  },[number])
  return (
    <div>
        <h1>Counter</h1>
        <p>{counter}</p>
        <button onClick={()=>setCounter(counter+1)}>Increment</button>
        <Sum number={counter}/>
        
        <p>Prime is : {prime}</p>
         <button onClick={()=>setNumber(number+1000)}>Prime</button>
    </div>
  )
}

export default App
