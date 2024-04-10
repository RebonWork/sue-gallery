"use client";
import Image from "next/image";
import { useQuery } from "react-query";
import ProductSkeleton from "@/components/Global/ProductSkelaton";
import { v4 } from "uuid";
import { getProduct } from "@/actions/queries";

export default function ProductList() {
  const { data, isFetched } = useQuery("product", getProduct);

  function mapProducts(prod) {
    return (
      <div key={v4()}>
        <Image
          src={prod.cover.url}
          height={80}
          width={80}
          alt={"Product " + prod.name + " Photo"}
        />
        <h1>{prod.name}</h1>
        <h1>{prod.price}</h1>
        <h1>{prod.rating}</h1>
      </div>
    );
  }

  return (
    <div>

      {isFetched ? data?.map(mapProducts) : <ProductSkeleton />}
    </div>
  );
}
