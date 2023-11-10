"use client"
import Button from '@/components/Global/Button'
import Form from '@/components/Global/Form'
import axios from 'axios'
import React from 'react'

const page = () => {

    async function handleAddProduct(formData){
        const name = formData.get("name")
        const desc = formData.get("desc")
        const price = formData.get("price")
        
        await fetch("/api/product",{
          method:"POST",
          body:JSON.stringify({name,desc,price})
        })    
    }

  return (
    <Form action={handleAddProduct} >
        <label htmlFor='product-name'>Product Name</label>
        <input type='text' id='product-name' name='name'/>
        <label htmlFor='product-desc'>Product Description</label>
        <input type='text' id='product-desc' name='desc'/>
        <label htmlFor='product-price'>Price</label>
        <input type="number" id='product-price' name='price'/>
        <Button value="Add Product"/>
    </Form>
  )
}

export default page