"use client";
import DashboardProducts from "@/components/Dashboard/DashboardProducts";
import Link from "next/link";

function Page() {
  return (
    <div>
      <Link href={"/dashboard/products/add"}>Add Products</Link>
      <DashboardProducts />
    </div>
  );
}

export default Page;
