"use client";
import DashboardProducts from "@/components/Dashboard/DashboardProducts";
import Link from "next/link";
const Page = () => {

  return (
    <div>
      <Link href={"/dashboard/products/add"}>Add Products</Link>
      <DashboardProducts/>
    </div>
  );
};

export default Page;
