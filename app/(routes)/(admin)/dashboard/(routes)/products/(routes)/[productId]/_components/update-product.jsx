import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "react-query";
import formSchema from "../../_components/formSchema";
import { updateProduct } from "@/actions/queries";
import ProductForm from "../../_components/ProductForm";

const UpdateProductForm = ({ id, data }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(updateProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries("product");
    },
  });
  const [imagesData, setImagesData] = useState([]);
  const [coverData, setCoverData] = useState(null);
  const { toast } = useToast();
  const form = useForm({
    mode: "onSubmit",
    defaultValues: {
      name: data?.name,
      description: data?.description,
      price: data?.price,
      stock: data?.stock,
      category: data?.category.id,
      isActive: data?.isActive,
    },
    resolver: zodResolver(formSchema),
  });
  const { formState, handleSubmit, control } = form;
  const { isSubmitting } = formState;
  async function handleDataSubmit(data) {
    try {
      await mutation.mutate({
        id,
        ...data,
        cover: coverData,
        images: imagesData,
      });
      toast({
        description: "Product Successfully Added",
        variant: "success",
      });
    } catch (error) {
      toast({
        description: "Ops! Product Wasn't Added. Please Try Again Later",
        variant: "fail",
      });
    }
  }
  useEffect(() => {
    setCoverData(data?.cover);
    setImagesData(data?.images);
  }, [data]);
  return (
    <>
      <ProductForm
        imagesData={imagesData}
        setImagesData={setImagesData}
        coverData={coverData}
        setCoverData={setCoverData}
        form={form}
        handleSubmit={handleSubmit}
        control={control}
        isSubmitting={isSubmitting}
        handleDataSubmit={handleDataSubmit}
      ></ProductForm>
    </>
  );
};

export default UpdateProductForm;
