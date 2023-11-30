"use client";
import { getData } from "@/actions/siteActions";
import DashboardProductsCard from "./DashboardProductsCard";
import { useRouter } from "next/navigation";
import useSWR from "swr";

const DashboardProducts = () => {
  const router = useRouter();

  const { data, error } = useSWR("/api/product", getData, {
    refreshInterval: 2000,
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
        cover={prod.cover? prod.cover.url : "/./no-photo.jpg"}
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
