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
      <div className="input-area">
        <label htmlFor="product-name">Product Name</label>
        <input
          autoComplete="off"
          type="text"
          value={form.name}
          onChange={handleData}
          className="input-field"
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
      <div className="input-area">
        <label htmlFor="product-price">Price</label>
        <input
          type="number"
          className="input-field"
          value={form.price}
          onChange={handleData}
          id="product-price"
          name="price"
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="input-area">
        <label htmlFor="product-stock">Stock</label>
        <input
          className="input-field"
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
