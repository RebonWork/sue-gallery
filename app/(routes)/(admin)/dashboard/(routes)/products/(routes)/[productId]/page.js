"use client";
import { getProduct } from "@/actions/queries";
import { useParams } from "next/navigation";
import { useQuery } from "react-query";
import UpdateProductForm from "./_components/update-product";


function Page() {
  const { productId } = useParams();
  const { data, isFetched } = useQuery(['product', productId], () => getProduct(productId))

  return <h1>{isFetched?<UpdateProductForm data={data} id={productId}/>: "loading" }</h1>;
}

export default Page;
