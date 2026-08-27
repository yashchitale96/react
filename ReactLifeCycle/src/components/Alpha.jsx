import React, { useEffect, useState } from 'react'

const Alpha = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
         console.log('child component - Mounting')

        return ()=>{
            console.log("unmounting the child component")
        }
    },[])

    useEffect(()=>{
        console.log('child component - state changed')
    },[count])

  return (
    <div>
        <p>Alpha {count}</p>
        <button onClick={()=>{setCount(count+1)}}>Increment Alpha</button>
    </div>
  )
}

export default Alpha