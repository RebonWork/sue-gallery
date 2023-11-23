"use client";
import Header from "@/components/Global/Header";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/product", {
        method: "GET",
      });
      const products = await res?.json();
      console.log(products);
      setData(products);
    }
    fetchData();
  }, []);

  function mapProducts(prod) {
    return (
      <div>
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
    <Header/>
      {data?.map(mapProducts)}
    </div>
  );
}
