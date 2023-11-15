"use client";
import Button from "@/components/Global/Button";
import Form from "@/components/Global/Form";
import React, { useState } from "react";

const Page = () => {
  const [encodedImage, setEncodedImage] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  function encodeImage(event) {
    const images = event.target.files;
    [...images].map((image) => {
      var reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = async () => {
        const dataUrl = reader.result;
        await setEncodedImage((prev) => [...prev, dataUrl]);
      };
    });
  }

  async function handleAddProduct() {
    const addProduct = await fetch("/api/product", {
      method: "POST",
      body: JSON.stringify({ name, desc, price, encodedImage }),
    }).then(async (response) => await response.json());

    if (addProduct?.msg) alert(addProduct.msg);
    setName("");
    setDesc("");
    setPrice("");
    setEncodedImage([]);
  }

  return (
    <Form className="flex-col" action={handleAddProduct}>
      <div>
        <label htmlFor="product-name">Product Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="product-name"
          name="name"
        />
      </div>
      <div>
        <label htmlFor="product-desc">Product Description</label>
        <input
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          id="product-desc"
          name="desc"
        />
      </div>
      <div>
        <label htmlFor="product-price">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          id="product-price"
          name="price"
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
          onChange={encodeImage}
          multiple
        />
      </div>
      <Button value="Add Product" />
    </Form>
  );
};

export default Page;
