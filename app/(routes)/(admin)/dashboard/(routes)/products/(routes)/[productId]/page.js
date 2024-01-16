"use client";

import { useParams } from "next/navigation";
import { useQuery } from "react-query";
import UpdateProductForm from "./_components/update-product";
import { getProductById } from "@/actions/queries";

function Page() {
  const { productId } = useParams();
  const { data, isFetched } = useQuery(['product', productId], () => getProductById(productId))

  return <h1>{isFetched?<UpdateProductForm data={data} id={productId}/>: "loading" }</h1>;
}

export default Page;
