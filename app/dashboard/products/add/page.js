"use client";

import NewProductForm from "@/components/Dashboard/NewProductForm";
import GoBackButton from "@/components/Global/GoBackButton";
import SnackBar from "@/components/Global/SnackBar";

import React, { useState } from "react";

const Page = () => {
  const [encodedImage, setEncodedImage] = useState([]);
  const [encodedCoverImage, setEncodedCoverImage] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleClose = (event, reason) => {
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

  async function handleAddProduct() {
    const addProduct = await fetch("/api/product", {
      method: "POST",
      body: JSON.stringify({
        name,
        desc,
        price,
        encodedImage,
        encodedCoverImage,
      }),
    }).then(async (response) => await response.json());

    if (addProduct?.msg) setMessage(addProduct.msg);
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
      <SnackBar
        isOpen={isOpen}
        handleClose={handleClose}
        severity="success"
        message={message}
      />
    </div>
  );
};

export default Page;
