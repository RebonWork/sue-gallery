import FormButton from "@/components/Global/Button";
import { useToast } from "@/components/ui/use-toast";
import GoBackButton from "@/components/Global/GoBackButton";
import ProductPhotos from "./ProductPhotos";
import CoverPhoto from "./CoverPhoto";
import { Divider } from "@nextui-org/react";

import React, { useState } from "react";
import InputFields from "./InputFields";
import Form from "@/components/Global/Form";
import DropdownCategory from "../../../_components/DropdownCategory";
import PageLeader from "@/app/(routes)/(admin)/dashboard/_components/PageLeader";

const AddProducts = () => {
  const [imagesData, setImagesData] = useState([]);
  const [coverData, setCoverData] = useState(null);
  const [form, setForm] = useState({
    name: "",
    desc: "",
    price: "",
    stock: "",
  });
  const { toast } = useToast();
  const [category, setCategory] = useState("");

  async function handleAddProduct() {
    await fetch("/api/product", {
      method: "POST",
      body: JSON.stringify({ ...form, category, coverData, imagesData }),
    }).then(async (response) => await response.json()); //Posting Data to Database and retrieving message "product added sucessfully"
    setForm({
      name: "",
      desc: "",
      price: "",
      stock: "",
    });
    setCoverData("");
    setImagesData([]);
    setCategory("");
    toast({
      description: "Product Successfully Added",
      variant: "success",
    });
  }

  async function handleData(e) {
    const name = e.target.name;
    setForm({ ...form, [name]: e.target.value });
  }

  return (
    <div className=" w-full">
      <PageLeader>Add Product</PageLeader>
      <div className="add-product-container">
        <Form className="form" action={handleAddProduct}>
          <div className="picture-container">
            <div className="image-container">
              <h3 className="scroll-m-20 text-  l font-semibold tracking-tight">
                Add Product Photos
              </h3>
              <ProductPhotos
                imagesData={imagesData}
                setImagesData={(e) => setImagesData(e)}
              />
            </div>
            <div className="cover-container">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Add Product Cover
              </h3>
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
            <div className="input-area">
              <DropdownCategory
                defaultValue={category}
                currentValue={category}
                setCategory={(catg) => setCategory(catg)}
              />
            </div>
            <FormButton value="Add Products" />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddProducts;
