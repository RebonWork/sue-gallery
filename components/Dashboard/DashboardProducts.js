"use client";
import DashboardProductsCard from "./DashboardProductsCard";
import { useRouter } from "next/navigation";
import useSWR from "swr";

const DashboardProducts = () => {
  const router = useRouter();

  const fetcher = async() => {
    const res = await fetch("/api/product", {
    method: "GET",
  });
    const products = await res.json();
    return products 
  }

  const { data, error } = useSWR("/api/product", fetcher, {
    refreshInterval: 1000,
  });


  async function deleteProduct(id) {
    await fetch("/api/product", {
      method: "DELETE",
      body: JSON.stringify(id),
    });
  }

  function editProduct(id) {
    router.push(`/dashboard/products/${id}`);
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
      <h1>{data?.map(handledata)}</h1>
    </div>
  );
};

export default DashboardProducts;
