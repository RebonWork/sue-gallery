import Button from "@/components/Global/Button";
import CustomSnackbar from "@/components/Global/CustomSnackbar";
import Form from "@/components/Global/Form";
import GoBackButton from "@/components/Global/GoBackButton";

import React, { useState } from "react";
import CoverPhoto from "./CoverPhoto";
import ProductPhotos from "./ProductPhotos";
const AddProducts = () => {
  const [imagesData, setImagesData] = useState([]);
  const [coverData, setCoverData] = useState(null);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleClose = (event, reason) => {
    //closing Snackbar
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  async function handleAddProduct() {
    const addProduct = await fetch("/api/product", {
      method: "POST",
      body: JSON.stringify({
        name,
        desc,
        price,
        stock,
        coverData,
        imagesData,
      }),
    }).then(async (response) => await response.json()); //Posting Data to Database and retrieving message "product added sucessfully"

    if (addProduct?.msg) setMessage(addProduct.msg); //setting the message for the SnackBar
    setName("");
    setDesc("");
    setPrice("");
    setStock("");
    setCoverData("");
    setImagesData([]);
    setOpen(true);
  }

  return (
    <div>
      <GoBackButton page="/dashboard/products" />
      <Form className="flex-col" action={handleAddProduct}>
        <div>
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e?.target?.value)}
            id="product-name"
            name="name"
          />
        </div>
        <div>
          <label htmlFor="product-desc">Product Description</label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e?.target?.value)}
            id="product-desc"
            name="desc"
          />
        </div>
        <div>
          <label htmlFor="product-price">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e?.target?.value)}
            id="product-price"
            name="price"
          />
        </div>
        <div>
          <label htmlFor="product-stock">Stock</label>
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e?.target?.value)}
            id="product-stock"
            name="stock"
          />
        </div>
        <CoverPhoto
          coverData={coverData}
          setCoverData={(e) => setCoverData(e)}
        />
        <ProductPhotos
          imagesData={imagesData}
          setImagesData={(e) => setImagesData(e)}
        />
        <Button value="Add Product" />
      </Form>
      <CustomSnackbar
        isOpen={isOpen}
        handleClose={handleClose}
        severity="success"
        message={message}
      />
    </div>
  );
};

export default AddProducts;
