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
import { IsActiveSwitch } from "../../_components/IsActiveSwitch";
import { useMutation, useQueryClient } from "react-query";
import { addProduct } from "@/actions/queries";

const AddProductForm = () => {
  const [imagesData, setImagesData] = useState([]);
  const [coverData, setCoverData] = useState(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const mutation = useMutation(addProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries("product");
    },
  });

  const form = useForm({
    mode: "onSubmit",
    defaultValues: {
      name: "",
      description: "",
      price: "",
      stock: "",
      category: "",
      isActive: false,
    },
    resolver: zodResolver(formSchema),
  });
  const { formState, handleSubmit, control, setError, reset } = form;
  const { isSubmitSuccessful, isSubmitting } = formState;
  async function handleAddProduct(data) {
    console.log(data);
    try {
      await mutation.mutate({
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
    <Form {...form}>
      <form
        className="flex flex-row gap-16"
        onSubmit={handleSubmit(handleAddProduct)}
      >
        <div className="flex flex-row gap-12 ">
          <div className="flex h-max flex-col items-center w-auto bg-white rounded-md shadow-sm p-6 ">
            <h5>Add Product Photos</h5>
            <ProductPhotos
              imagesData={imagesData}
              setImagesData={(e) => setImagesData(e)}
            />
          </div>
          <div className=" w-auto h-max bg-white rounded-md shadow-sm p-6">
            <h5>Add Product Cover</h5>
            <CoverPhoto
              coverData={coverData}
              setCoverData={(e) => setCoverData(e)}
            />
          </div>
        </div>
        <div className=" flex flex-col gap-6 bg-white rounded-md shadow-sm p-6">
          <h1 className="text-3xl font-bold">Product Information</h1>
          <NameField control={control} />
          <PriceField control={control} />
          <StockField control={control} />
          <CategoryField control={control} />
          <IsActiveSwitch control={control} />

          <DescriptionField
            isSubmitSuccessful={isSubmitSuccessful}
            control={control}
          ></DescriptionField>
          <SubmitFormButton isSubmitting={isSubmitting}>
            Add New Product
          </SubmitFormButton>
        </div>
      </form>
    </Form>
  );
};

export default AddProductForm;
