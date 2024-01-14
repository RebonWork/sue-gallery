"use client";
import { getData } from "@/actions/siteActions";
import useSWR from "swr";
import { DataTableDemo } from "./ProductTable/ProductTable";

const DashboardProducts = () => {


  const { data, error } = useSWR("/api/product", getData, {
    refreshInterval: 2000,
  });



  return (
    <DataTableDemo data={data? data: []}/>
  );
};

export default DashboardProducts;
