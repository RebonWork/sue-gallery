"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";
import { getProduct } from "@/actions/queries";
import { useQuery } from "react-query";
import { ProductTable } from "./_components/ProductTable";

function Page() {
  const { data, isFetched } = useQuery("product", getProduct);

  return (
    <div className="h-screen px-10 mt-6">
      <div className="flex justify-between items-center pr-12">
        <h1 className="text-5xl font-bold">All Products</h1>
        <Button
          size="lg"
          className=" text-lg flex items-center gy-2 gap-x-1 bg-pink-300 hover:bg-pink-400"
        >
          <Plus />
          <Link href={"/dashboard/products/add"}>Add Products</Link>
        </Button>
      </div>
      <div className="px-12 mt-6 bg-white rounded-md shadow-sm p-6">
        <ProductTable isFetched={isFetched} data={isFetched && data} />
      </div>
    </div>
  );
}

export default Page;
