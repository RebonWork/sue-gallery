import React from "react";
import Editor from "./Editor/Editor";

const InputFields = ({form, handleData,setForm,desc}) => {
  return (
    <div>
      <div>
        <label htmlFor="product-name">Product Name</label>
        <input
          type="text"
          value={form.name}
          onChange={handleData}
          id="product-name"
          name="name"
        />
      </div>
      {/* <div>
        <label htmlFor="product-desc">Product Description</label>
        <input
          type="text"
          value={form.desc}
          onChange={handleData}
          id="product-desc"
          name="desc"
        />
      </div> */}
      <Editor desc={desc} onChange={(desc)=> {setForm({ ...form, desc })}}/>
      <div>
        <label htmlFor="product-price">Price</label>
        <input
          type="number"
          value={form.price}
          onChange={handleData}
          id="product-price"
          name="price"
        />
      </div>
      <div>
        <label htmlFor="product-stock">Stock</label>
        <input
          type="number"
          value={form.stock}
          onChange={handleData}
          id="product-stock"
          name="stock"
        />
      </div>
    </div>
  );
};

export default InputFields;
