"use client";
import React, { useEffect, useState } from "react";
import ProductSkeleton from "@/components/Global/ProductSkelaton";
import GoBackButton from "@/components/Global/GoBackButton";
import { useToast } from "@/components/ui/use-toast";
import UpdateFields from "./UpdateFields";
import { getDataByID } from "@/actions/siteActions";
import PageLeader from "@/app/(routes)/(admin)/dashboard/_components/PageLeader";

const UpdateSingleProduct = (props) => {
  const id = props.id;

  /*------------------------------States------------------------------*/
  const [isloading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const { toast } = useToast();
  /*------------------------------Website Functions------------------------------*/

  useEffect(
    () => async () => {
      setData(await getDataByID(id));
      setLoading(false);
    },
    [id]
  )

  return (
    <div>
      <PageLeader>Update Product</PageLeader>
      {isloading ? (
        <ProductSkeleton />
      ) : (
        <UpdateFields
          id={id}
          data={data}
          open={() =>
            toast({
              description: "Product Successfully Updated",
              variant: "success",
            })
          }
        />
      )}
    </div>
  );
};

export default UpdateSingleProduct;
