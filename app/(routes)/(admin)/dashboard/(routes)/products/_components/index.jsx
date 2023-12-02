"use client";
import { getData } from "@/actions/siteActions";
import useSWR from "swr";
import Products from "./Products";

const DashboardProducts = () => {


  const { data, error } = useSWR("/api/product", getData, {
    refreshInterval: 2000,
  });



  return (
    <ul  className="card-container">
        <h1>ID</h1>
        <h1>Product</h1>
        <h1>Category</h1>
        <h1>Price</h1>
        <h1>Stock</h1>
        <h1></h1>

    <Products data={data}/>
    </ul>
  );
};

export default DashboardProducts;
