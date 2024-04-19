import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import formSchema from "../../_components/formSchema";
import { useToast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "react-query";
import { addProduct } from "@/actions/queries";
import ProductForm from "../../_components/ProductForm";



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
  async function handleDataSubmit(data) {
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
    <ProductForm
      imagesData={imagesData}
      setImagesData={setImagesData}
      coverData={coverData}
      setCoverData={setCoverData}
      form={form}
      handleSubmit={handleSubmit}
      control={control}
      handleDataSubmit={handleDataSubmit}
      isSubmitting={isSubmitting}
    ></ProductForm>
  );
};

export default AddProductForm;
