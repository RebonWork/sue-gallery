"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ProductSkeleton from "../Global/ProductSkelaton";
import Form from "../Global/Form";
import Button from "../Global/Button";
import { DeleteForever } from "@mui/icons-material";
import GoBackButton from "../Global/GoBackButton";
import SingleProductImage from "./SingleProductImage";
import { deleteSingleImageClient, uploadSingleImageClient } from "@/actions/siteActions";
import CustomSnackbar from "../Global/CustomSnackbar";

const DashboardProduct = (props) => {
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

  async function handleImageDelete(publicID) {
    deleteSingleImageClient(publicID)
    setUpdateImages((prevImages) => {
      return prevImages.filter((images) => images.publicID  !== publicID);});
  }

  async function handleCoverDelete(){
    await deleteSingleImageClient(updateCover.publicID)
    setUpdateCover(null)
  }

  async function handleCoverUpdate(event){
    const coverData = await uploadSingleImageClient(event.target.files[0])
    setUpdateCover(coverData)
  }

async function handleImagesUpdate(event){
  const images = event.target.files
  for (const [key, value] of Object.entries(images)) {
    const imageData = await uploadSingleImageClient(value)
    setUpdateImages((prev)=>[...prev, imageData])
  }

  
}

  async function handleUpdate() {
    const res = await fetch("/api/product", {
      method: "PATCH",
      body: JSON.stringify({ id, updateName, updateDesc, updatePrice, updateCover, updateImages}),
    }).then(async (response) => await response.json());
    if (res?.msg) {
      setOpen(true);
      setMessage(res.msg);
    }
  }
  function handleImageData(images){
    return <SingleProductImage handleImageDelete={handleImageDelete} id={images.publicID} imageUrl={images.url}/>
  }

  return (
    <div>
      <GoBackButton page="/dashboard/products" />
      {isloading ? (
        <ProductSkeleton />
      ) : (
        <div>
          <div>
          {updateCover? <div>
            <Image
              className="dashboard-product-image"
              src={updateCover.url}
              width={100}
              height={100}
              alt="product image"
            />
            <DeleteForever onClick={handleCoverDelete} className="click-icon" />
          </div> : <input type="file" onChange={handleCoverUpdate}/>}

          </div>
          <div className="flex gap-3">
            {updateImages.map(handleImageData)}
            <input type="file" onChange={handleImagesUpdate} multiple/>
          </div>

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
      <CustomSnackbar
        isOpen={isOpen}
        handleClose={handleClose}
        severity="success"
        message={message}
      />
    </div>
  );
};

export default DashboardProduct;
