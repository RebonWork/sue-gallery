"use client";
import { getData } from "@/actions/siteActions";
import useSWR from "swr";
import Products from "./Products";
import { DataTableDemo } from "./ProductTable/ProductTable";

const DashboardProducts = () => {


  const { data, error } = useSWR("/api/product", getData, {
    refreshInterval: 2000,
  });



  return (
    // <ul  className=" flex-col">
    // <div className="card-container">
    //     <h1>Product</h1>
    //     <h1>Category</h1>
    //     <h1>Price</h1>
    //     <h1>Stock</h1>
    //     <h1></h1>
    // </div>

    // <Products data={data}/>
    // </ul>
    <DataTableDemo data={data? data: []}/>
  );
};

export default DashboardProducts;
