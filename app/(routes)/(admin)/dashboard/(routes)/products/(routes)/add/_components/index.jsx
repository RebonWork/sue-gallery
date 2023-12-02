import Button from "@/components/Global/Button";
import CustomSnackbar from "@/components/Global/CustomSnackbar";
import Form from "@/components/Global/Form";
import GoBackButton from "@/components/Global/GoBackButton";
import ProductPhotos from "./ProductPhotos";
import CoverPhoto from "./CoverPhoto";
import Editor from "./Editor/Editor";
import InputFields from "./InputFields";

import React, { useState } from "react";
const AddProducts = () => {
  const [imagesData, setImagesData] = useState([]);
  const [coverData, setCoverData] = useState(null);
  const [form, setForm] = useState({
    name: "",
    desc: "",
    price: "",
    stock: "",
  });
  const [isOpen, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleClose = (event, reason) => {
    //closing Snackbar
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  async function handleAddProduct(e) {
    e.preventDefault();
    const addProduct = await fetch("/api/product", {
      method: "POST",
      body: JSON.stringify({...form,coverData,imagesData}),
    }).then(async (response) => await response.json()); //Posting Data to Database and retrieving message "product added sucessfully"

    if (addProduct?.msg) setMessage(addProduct.msg); //setting the message for the SnackBar
    setForm({
      name: "",
      desc: "",
      price: "",
      stock: "",
    });
    setCoverData("");
    setImagesData([]);
    setOpen(true);
  }

  async function handleData(e) {
    const name = e.target.name;
    setForm({ ...form, [name]: e.target.value });
  }

  return (
    <div>
      <GoBackButton page="/dashboard/products" />
      <div className="flex-col">
        <InputFields form={form} handleData={handleData} setForm={setForm} desc={form.desc} />
        <CoverPhoto
          coverData={coverData}
          setCoverData={(e) => setCoverData(e)}
        />
        <ProductPhotos
          imagesData={imagesData}
          setImagesData={(e) => setImagesData(e)}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
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
