import React from 'react'

const Sum = React.memo(({number}) => {
    function CaculateSum(){
        let sum = 0;
        for(let i=0; i<1000; i++){
            sum+=i;
        }

        return sum;
    }

    const SumVar = CaculateSum();

    console.log('Sum re-render')
  return (
    <div>
        <h1>Sum</h1>
        <h1>{SumVar}</h1>
        <h1>{number}</h1>
        
    </div>
  )
})

export default Sum