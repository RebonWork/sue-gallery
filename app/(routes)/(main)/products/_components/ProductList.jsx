"use client";
import { getData } from "@/actions/siteActions";
import Image from "next/image";
import { useEffect, useState } from "react";
import ProductSkeleton from "@/components/Global/ProductSkelaton";
import { v4 } from "uuid";

export default function ProductList({children}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => async () => setData(await getData()), []);
  useEffect(() => setLoading(false), [data]);

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
    {children}
      {loading ? <ProductSkeleton /> : data?.map(mapProducts)}
    </div>
  );
}
