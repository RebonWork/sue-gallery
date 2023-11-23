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
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [coverDate, setCoverData] = useState("");
  const [imagesData, setImagesData] = useState([]);
  const [message, setMessage] = useState("");
  const [isOpen, setOpen] = useState(false);



  async function getData() {
    const res = await fetch("/api/product", {
      method: "POST",
      body: JSON.stringify({ id }),
    }).then(async (response) => await response.json());
    const { name, price, desc, cover, images } = res;
    setName(name);
    setPrice(price);
    setDesc(desc);
    setCoverData(cover);
    setImagesData(images);
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
    setImagesData((prevImages) => {
      return prevImages.filter((images) => images.publicID  !== publicID);});
  }

  async function handleCoverDelete(){
    await deleteSingleImageClient(coverDate.publicID)
    setCoverData(null)
  }

  async function handleCoverUpdate(event){
    const coverData = await uploadSingleImageClient(event.target.files[0])
    setCoverData(coverData)
  }

async function handleImagesUpdate(event){
  const images = event.target.files
  for (const [key, value] of Object.entries(images)) {
    const imageData = await uploadSingleImageClient(value)
    setImagesData((prev)=>[...prev, imageData])
  }

  
}

  async function handleUpdate() {
    const res = await fetch("/api/product", {
      method: "PATCH",
      body: JSON.stringify({ id, name, desc, price, coverDate, imagesData}),
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
          {coverDate? <div>
            <Image
              className="dashboard-product-image"
              src={coverDate.url}
              width={100}
              height={100}
              alt="product image"
            />
            <DeleteForever onClick={handleCoverDelete} className="click-icon" />
          </div> : <input type="file" onChange={handleCoverUpdate}/>}

          </div>
          <div className="flex gap-3">
            {imagesData.map(handleImageData)}
            <input type="file" onChange={handleImagesUpdate} multiple/>
          </div>

          <h1>{id}</h1>
          <Form action={handleUpdate}>
            <label htmlFor="name">Product Name</label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="desc">Product Description</label>
            <input
              id="desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <label htmlFor="price">Product Price</label>
            <input
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
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
