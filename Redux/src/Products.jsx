import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Products = () => {
    const products = useSelector(state => state.productReducer.products)
    console.log(products)

    useEffect(()=>{
        console.log('Re-render')
    }, [products])
  return (
    <div>
        {JSON.stringify(products)}
    </div>
  )
}

export default React.memo(Products)