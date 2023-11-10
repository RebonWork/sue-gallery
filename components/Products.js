import React from 'react'

const Products = async () => {
    const products=   await fetch("/api/product",{
        method:"GET",
      })  
  return (
    <div>{products}</div>
  )
}

export default Products