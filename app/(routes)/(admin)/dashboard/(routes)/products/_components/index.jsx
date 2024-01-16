"use client";
import { ProductTable } from "./ProductTable/ProductTable";
import { getProduct } from "@/actions/queries";
import { useQuery } from "react-query";

const DashboardProducts = () => {
  const { data, isFetched } = useQuery("product", getProduct);


  return <ProductTable data={isFetched&&data}/>;
};

export default DashboardProducts;
