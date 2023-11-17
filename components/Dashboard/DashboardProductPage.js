"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ProductSkeleton from "../Global/ProductSkelaton";
import Form from "../Global/Form";
import Button from "../Global/Button";
import SnackBar from "../Global/SnackBar";
import { DeleteForever } from "@mui/icons-material";
import GoBackButton from "../Global/GoBackButton";

const DashboardProductPage = (props) => {
  const id = props.id;
  const [isloading, setLoading] = useState(true);
  const [updateName, setUpdateName] = useState("");
  const [updateDesc, setUpdateDesc] = useState("");
  const [updatePrice, setUpdatePrice] = useState("");
  const [updateCover, setUpdateCover] = useState("");
  const [updateImages, setUpdateImages] = useState([]);
  const [message, setMessage] = useState("");
  const [isOpen, setOpen] = useState(false);

  async function getData() {
    const res = await fetch("/api/product", {
      method: "POST",
      body: JSON.stringify({ id }),
    }).then(async (response) => await response.json());
    const { name, price, desc, cover, images } = res;
    setUpdateName(name);
    setUpdatePrice(price);
    setUpdateDesc(desc);
    setUpdateCover(cover);
    setUpdateImages(images);

    setLoading(false);
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  async function handleUpdate() {
    const res = await fetch("/api/product", {
      method: "PATCH",
      body: JSON.stringify({ id, updateName, updateDesc, updatePrice }),
    }).then(async (response) => await response.json());
    if (res?.msg) {
      setOpen(true);
      setMessage(res.msg);
    }
  }

  function mapImages(image) {
    return (
      <>
        <Image
          className="dashboard-product-image"
          src={image}
          width={100}
          height={100}
          alt="product image"
        />
        <DeleteForever className="click-icon"/>
      </>
    );
  }

  return (
    <div>
    <GoBackButton page="/dashboard/products"/>
      {isloading ? (
        <ProductSkeleton />
      ) : (
        <div>
          <div>
            <Image
              className="dashboard-product-image"
              src={updateCover}
              width={100}
              height={100}
              alt="product image"
            />
            <DeleteForever className="click-icon" />
          </div>
          <div className="flex gap-3">{updateImages.map(mapImages)}</div>

          <h1>{id}</h1>
          <Form action={handleUpdate}>
            <label htmlFor="name">Product Name</label>
            <input
              id="name"
              value={updateName}
              onChange={(e) => setUpdateName(e.target.value)}
            />
            <label htmlFor="desc">Product Description</label>
            <input
              id="desc"
              value={updateDesc}
              onChange={(e) => setUpdateDesc(e.target.value)}
            />
            <label htmlFor="price">Product Price</label>
            <input
              id="price"
              value={updatePrice}
              onChange={(e) => setUpdatePrice(e.target.value)}
            />
            <Button value="Update Product" />
          </Form>
        </div>
      )}
      <SnackBar
        isOpen={isOpen}
        handleClose={handleClose}
        severity="success"
        message={message}
      />
    </div>
  );
};

export default DashboardProductPage;
