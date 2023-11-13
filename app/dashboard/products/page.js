"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Page = () => {
  const [data, setData] = useState([]);
  
  async function getData() {
    const res = await fetch("/api/product", {
      method: "GET"
    });
    const products = await res.json();
    await setData(products);
  }

  useEffect(() => {
    getData()
    return () => {}
    },[])

  function handledata(prod) {
    return (
      <div className=" w-50 h-12">
        <Image src={prod.image} width={200} height={200} alt="product image" priority={true}/>
        <h1>{prod.name}</h1>
        <h1>{prod.desc}</h1>
        <h1>{prod.price}</h1>
      </div>
    );
  }
  return (
    <div>
      <Link href="/dashboard/products/add">Add Product</Link>
      <h1>{data.map(handledata)}</h1>
    </div>
  );
};

export default Page;
