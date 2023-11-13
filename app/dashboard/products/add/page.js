"use client";
import Button from "@/components/Global/Button";
import Form from "@/components/Global/Form";
import React, { useState } from "react";

const Page = () => {
  const [encodedImage, setEncodedImage] = useState();

  function encodeImage(event) {
    // const images = event.target.files;
    // [...images].map((image) => {
    //   var reader = new FileReader();
    //   reader.readAsDataURL(image);
    //   reader.onload = async () => {
    //     const dataUrl = reader.result;
    //     await setEncodedImage((prev)=>[...prev,dataUrl]);
    //   };
    // });

    const image = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = async () => await setEncodedImage(reader.result);
  }


  async function handleAddProduct(formData) {
    const name = formData.get("name");
    const desc = formData.get("desc");
    const price = formData.get("price");
    const image = encodedImage;

    const addProduct = await fetch("/api/product", {
      method: "POST",
      body: JSON.stringify({ name, desc, price, image }),
    }).then(async response => await response.json());

    if(addProduct?.msg) alert(addProduct.msg)
  }

  return (
    <Form className="flex-col" action={handleAddProduct}>
      <div>
        <label htmlFor="product-name">Product Name</label>
        <input type="text" id="product-name" name="name" />
      </div>
      <div>
        <label htmlFor="product-desc">Product Description</label>
        <input type="text" id="product-desc" name="desc" />
      </div>
      <div>
        <label htmlFor="product-price">Price</label>
        <input type="number" id="product-price" name="price" />
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
        />
      </div>

      <Button value="Add Product" />
    </Form>
  );
};

export default Page;
