"use client";
import DashboardProducts from "./_components";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

function Page() {
  return (
    <div className="product-container">
      <div className="page-header">
        <h1 className="title">All Products</h1>
        <Link className="add-button" href={"/dashboard/products/add"}><FaPlus/><h1>Add Products</h1></Link>
      </div>
      <DashboardProducts />

    </div>
  );
}

export default Page;
