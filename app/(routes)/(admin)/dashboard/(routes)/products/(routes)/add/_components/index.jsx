import FormButton from "@/components/Global/Button";
import CustomSnackbar from "@/components/Global/CustomSnackbar";
import GoBackButton from "@/components/Global/GoBackButton";
import ProductPhotos from "./ProductPhotos";
import CoverPhoto from "./CoverPhoto";

import React, { useState } from "react";
import InputFields from "./InputFields";
import Form from "@/components/Global/Form";
import DropdownCategory from "../../../_components/DropdownCategory";

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
  const [category, setCategory] = useState("");

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
      body: JSON.stringify({ ...form, category, coverData, imagesData }),
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
    setCategory("");
    setOpen(true);
  }

  async function handleData(e) {
    const name = e.target.name;
    setForm({ ...form, [name]: e.target.value });
  }

  return (
    <div className=" w-full">
      <GoBackButton page="/dashboard/products" />
      <div className="add-product-container">
        <Form className="form" action={handleAddProduct}>
          <div className="picture-container">
            <div className="image-container">
              <ProductPhotos
                imagesData={imagesData}
                setImagesData={(e) => setImagesData(e)}
              />
            </div>
            <div className="cover-container">
              <CoverPhoto
                coverData={coverData}
                setCoverData={(e) => setCoverData(e)}
              />
            </div>
          </div>
          <div className="input-container">
            <InputFields
              form={form}
              handleData={handleData}
              setForm={setForm}
              desc={form.desc}
            />
            <DropdownCategory setCategory={(catg) => setCategory(catg)} />
            <FormButton value="Add Products" />
          </div>
        </Form>
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
