import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "react-query";
import ProductPhotos from "../../_components/ProductPhotos";
import CoverPhoto from "../../_components/CoverPhoto";
import { NameField } from "../../_components/NameField";
import { PriceField } from "../../_components/PriceField";
import { StockField } from "../../_components/StockField";
import { CategoryField } from "../../_components/CategoryField";
import { DescriptionField } from "../../_components/DescriptionField";
import { SubmitFormButton } from "../../_components/SubmitFormButton";
import formSchema from "../../_components/formSchema";
import { IsActiveSwitch } from "../../_components/IsActiveSwitch";
import { updateProduct } from "@/actions/queries";

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
  async function handleAddProduct(data) {
    try {
      await mutation.mutate({id, ...data, cover: coverData, images: imagesData});
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

              <CategoryField control={control} ></CategoryField>
              
              <IsActiveSwitch control={control}></IsActiveSwitch>

              <DescriptionField control={control}></DescriptionField>
              <SubmitFormButton isSubmitting={isSubmitting}>Update Product</SubmitFormButton>
            </div>
          </form>
        </Form>
    </>
  );
};

export default UpdateProductForm;
