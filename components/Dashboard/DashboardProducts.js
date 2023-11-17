"use client";

import { useEffect, useState } from "react";
import DashboardProductsCard from "./DashboardProductsCard";
import { useRouter } from "next/navigation";


const DashboardProducts = () => {
  const [data, setData] = useState([]);
  const router = useRouter()
  async function getData() {
    const res = await fetch("/api/product", {
      method: "GET",
    });
    const products = await res.json();
    await setData(products);
  }
  useEffect(() => {
    getData();
  });

  async function deleteProduct(id) {
    const res = await fetch("/api/product", {
      method: "DELETE",
      body: JSON.stringify(id),
    });
  }

  function editProduct(id){
    router.push(`/dashboard/products/${id}`)
  }

  function handledata(prod) {
    return (
      <DashboardProductsCard
        key={prod._id}
        id={prod._id}
        cover={prod.cover}
        name={prod.name}
        desc={prod.desc}
        price={prod.price}
        deleteProduct={deleteProduct}
        editProduct={editProduct}
      />
    );
  }
  return (
    <div>
      <h1>{data.map(handledata)}</h1>
    </div>
  );
};

export default DashboardProducts;
