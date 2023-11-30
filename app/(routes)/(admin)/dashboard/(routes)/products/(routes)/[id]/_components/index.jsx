"use client";
import React, { useEffect, useState } from "react";
import ProductSkeleton from "@/components/Global/ProductSkelaton";
import GoBackButton from "@/components/Global/GoBackButton";
import CustomSnackbar from "@/components/Global/CustomSnackbar";
import UpdateFields from "./UpdateFields";
import { getDataByID } from "@/actions/siteActions";

const UpdateSingleProduct = (props) => {
  const id = props.id;

  /*------------------------------States------------------------------*/
  const [isloading, setLoading] = useState(true);
  const [isOpen, setOpen] = useState(false);
  const [data, setData] = useState({});

  /*------------------------------Website Functions------------------------------*/

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(
    () => async () => {
      setData(await getDataByID(id));
      setLoading(false);
    },
    [id]
  );

  
  return (
    <div>
      <GoBackButton page="/dashboard/products" />
      {isloading ? (
        <ProductSkeleton />
      ) : (
        <UpdateFields id={id} data={data} open={() => setOpen(true)} />
      )}
      <CustomSnackbar
        isOpen={isOpen}
        handleClose={handleClose}
        severity="success"
        message={"Product Updated Successfully"}
      />
    </div>
  );
};

export default UpdateSingleProduct;
