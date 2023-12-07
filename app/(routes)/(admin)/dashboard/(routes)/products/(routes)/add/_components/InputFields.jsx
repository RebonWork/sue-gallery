import React from "react";
import Editor from "./Editor/Editor";

const InputFields = ({ form, handleData, setForm, desc }) => {
  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  }
  return (
    <>
      <div>
        <label htmlFor="product-name">Product Name</label>
        <input
          type="text"
          value={form.name}
          onChange={handleData}
          id="product-name"
          name="name"
          onKeyDown={handleKeyDown}
        />
      </div>
      <Editor
        desc={desc}
        onChange={(desc) => {
          setForm({ ...form, desc });
        }}
      />
      <div>
        <label htmlFor="product-price">Price</label>
        <input
          type="number"
          value={form.price}
          onChange={handleData}
          id="product-price"
          name="price"
          onKeyDown={handleKeyDown}
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
          onKeyDown={handleKeyDown}
        />
      </div>
    </>
  );
};

export default InputFields;
