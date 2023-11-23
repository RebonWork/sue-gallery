"use client";

import {
  convertBase64,
  deleteSingleImageClient,
  uploadSingleImageClient,
} from "@/actions/siteActions";
import NewProductForm from "@/components/Dashboard/NewProductForm";
import SingleProductImage from "@/components/Dashboard/SingleProductImage";
import Button from "@/components/Global/Button";
import CustomSnackbar from "@/components/Global/CustomSnackbar";
import Form from "@/components/Global/Form";
import GoBackButton from "@/components/Global/GoBackButton";
import { DeleteForever } from "@mui/icons-material";
import Image from "next/image";

import React, { useState } from "react";

const Page = () => {
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

  async function handleCoverDelete() {
    await deleteSingleImageClient(updateCover.publicID);
    setCoverData(null);
  }
  async function handleUpload(event) {
    if (event?.target?.name === "image") {
      const images = event.target.files;
      for (const [key, value] of Object.entries(images)) {
        const imageData = await uploadSingleImageClient(value);
        setImagesData((prev) => [...prev, imageData]);
      }
    }

    if (event?.target?.name === "cover") {
      const cover = await uploadSingleImageClient(event.target.files[0]);
      setCoverData(cover)
    }
  }

  async function handleImageDelete(publicID) {
    deleteSingleImageClient(publicID);
    setImagesData((prevImages) => {
      return prevImages.filter((images) => images.publicID !== publicID);
    });
  }

  function handleImageData(images) {
    return (
      <SingleProductImage
        handleImageDelete={handleImageDelete}
        id={images.publicID}
        imageUrl={images.url}
      />
    );
  }
  async function handleAddProduct() {
    //adding products
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
    setCoverData("")
    setImagesData([])
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
        {coverData && (
          <div>
            <Image
              src={coverData?.url}
              width={50}
              height={50}
              alt="cover photo"
            />
            <DeleteForever onClick={handleCoverDelete} className="click-icon" />
          </div>
        )}

        <div>
          <label htmlFor="product-cover">Upload Product Cover Photo</label>
          <input
            type="file"
            id="product-cover"
            style={{ display: "none" }}
            name="cover"
            accept="image/*"
            onChange={handleUpload}
          />
        </div>
        {imagesData?.map(handleImageData)}
        <div>
          <label htmlFor="product-image">Upload Product Images</label>
          <input
            type="file"
            id="product-image"
            style={{ display: "none" }}
            name="image"
            accept="image/*"
            onChange={handleUpload}
            multiple
          />
        </div>
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

export default Page;
