"use client";

import NewProductForm from "@/components/Dashboard/NewProductForm";
import GoBackButton from "@/components/Global/GoBackButton";
import Snackbar from "@/components/Global/Snackbar";

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

  function encodeImage(event) {
    if (event?.target?.name === "image") {
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

    if (event?.target?.name === "cover") {
      const image = event.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(image);

      reader.onload = async () => {
        const dataUrl = reader.result;
        await setEncodedCoverImage(dataUrl);
      };
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
    setOpen(true); //triggering Snackbar
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
      <Snackbar
        isOpen={isOpen}
        handleClose={handleClose}
        severity="success"
        message={message}
      />
    </div>
  );
};

export default Page;
