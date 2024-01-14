import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import formSchema from "../../_components/formSchema";
import { Form } from "@/components/ui/form";
import axios from "axios";
import ProductPhotos from "../../_components/ProductPhotos"; 
import CoverPhoto from "../../_components/CoverPhoto"; 
import { useToast } from "@/components/ui/use-toast";
import { NameField } from "../../_components/NameField"; 
import { PriceField } from "../../_components/PriceField"; 
import { StockField } from "../../_components/StockField"; 
import { CategoryField } from "../../_components/CategoryField"; 
import { DescriptionField } from "../../_components/DescriptionField"; 
import { SubmitFormButton } from "../../_components/SubmitFormButton"; 

const AddProductForm = () => {
  const [imagesData, setImagesData] = useState([]);
  const [coverData, setCoverData] = useState(null);
  const { toast } = useToast();

  const form = useForm({
    mode: "onSubmit",
    defaultValues: {
      name: "",
      description: "",
      price: "",
      stock: "",
      category: "",
    },
    resolver: zodResolver(formSchema),
  });
  const { formState, handleSubmit, control, setError, reset } = form;
  const { isSubmitSuccessful, isSubmitting } = formState;
  async function handleAddProduct(data) {
    try {
      const res = await axios.post("/api/product", {
        ...data,
        cover: coverData,
        images: imagesData,
      });
      toast({
        description: "Product Successfully Added",
        variant: "success",
      });
    } catch (error) {
      setError("");
      toast({
        description: "Ops! Product Wasn't Added. Please Try Again Later",
        variant: "fail",
      });
    }
  }
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setCoverData(null);
      setImagesData([]);
    }
  }, [isSubmitSuccessful, reset]);
  return (
    <div className="mt-6">
      <Form {...form}>
        <form
          className="flex flex-row gap-16"
          onSubmit={handleSubmit(handleAddProduct)}
        >
          <div className="flex flex-row gap-12">
            <div className="w-32">
              <h3 className="scroll-m-20 text-  l font-semibold tracking-tight">
                Add Product Photos
              </h3>
              <ProductPhotos
                imagesData={imagesData}
                setImagesData={(e) => setImagesData(e)}
              />
            </div>
            <div className=" w-72">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Add Product Cover
              </h3>
              <CoverPhoto
                coverData={coverData}
                setCoverData={(e) => setCoverData(e)}
              />
            </div>
          </div>
          <div className=" flex flex-col gap-6">
            <NameField control={control}></NameField>

            <PriceField control={control}></PriceField>

            <StockField control={control}></StockField>

            <CategoryField control={control}></CategoryField>

            <DescriptionField
              isSubmitSuccessful={isSubmitSuccessful}
              control={control}
            ></DescriptionField>
            <SubmitFormButton isSubmitting={isSubmitting} />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddProductForm;
