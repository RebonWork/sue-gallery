import React from 'react'
import Button from "@/components/Global/Button";
import Form from "@/components/Global/Form";
const NewProductForm = (props) => {

  return (
    <Form className="flex-col" action={props.handleAddProduct}>
    <div>
      <label htmlFor="product-name">Product Name</label>
      <input
        type="text"
        value={props.name}
        onChange={props.handleName}
        id="product-name"
        name="name"
      />
    </div>
    <div>
      <label htmlFor="product-desc">Product Description</label>
      <input
        type="text"
        value={props.desc}
        onChange={props.handleDesc}
        id="product-desc"
        name="desc"
      />
    </div>
    <div>
      <label htmlFor="product-price">Price</label>
      <input
        type="number"
        value={props.price}
        onChange={props.handlePrice}
        id="product-price"
        name="price"
      />
    </div>
    <div>
      <label htmlFor="product-cover">Upload Product Cover Photo</label>
      <input
        type="file"
        id="product-cover"
        style={{ display: "none" }}
        name="cover"
        accept="image/*"
        onChange={props.encodeImage}
      />
    </div>
    <div>
      <label htmlFor="product-image">Upload Product Images</label>
      <input
        type="file"
        id="product-image"
        style={{ display: "none" }}
        name="image"
        accept="image/*"
        onChange={props.encodeImage}
        multiple
      />
    </div>
    <Button value="Add Product" />

  </Form>
  )
}

export default NewProductForm