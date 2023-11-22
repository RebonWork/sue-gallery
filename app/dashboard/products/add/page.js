"use client";

import { convertBase64 } from "@/actions/siteActions";
import NewProductForm from "@/components/Dashboard/NewProductForm";
import CustomSnackbar from "@/components/Global/CustomSnackbar";
import GoBackButton from "@/components/Global/GoBackButton";


import React, { useState } from "react";

const Page = () => {
  const [encodedImage, setEncodedImage] = useState([]);
  const [encodedCoverImage, setEncodedCoverImage] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleClose = (event, reason) => { //closing Snackbar
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  async function encodeImage(event) {
    if (event?.target?.name === "image") {
      const images = event.target.files;
      [...images].map(async (image) => {
        const imageUri = await convertBase64(image)
        await setEncodedImage((prev) => [...prev, imageUri])
      });
    }

    if (event?.target?.name === "cover") {
      const cover = event.target.files[0];
      const coverUri = await convertBase64(cover)
      setEncodedCoverImage(coverUri)
    }
  }

  async function handleAddProduct() { //adding products
    const addProduct = await fetch("/api/product", {
      method: "POST",
      body: JSON.stringify({
        name,
        desc,
        price,
        encodedImage,
        encodedCoverImage,
      }),
    }).then(async (response) => await response.json()); //Posting Data to Database and retrieving message "product added sucessfully"

    if (addProduct?.msg) setMessage(addProduct.msg); //setting the message for the SnackBar
    setName(""); 
    setDesc(""); 
    setPrice(""); 
    setEncodedImage([]); 
    setOpen(true);
  }

  return (
    <div>
      <GoBackButton page="/dashboard/products" />
      <NewProductForm
        handleAddProduct={handleAddProduct}
        handleName={(e) => setName(e.target.value)}
        handleDesc={(e) => setDesc(e.target.value)}
        handlePrice={(e) => setPrice(e.target.value)}
        encodeImage={encodeImage}
        name={name}
        desc={desc}
        price={price}
      />
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
