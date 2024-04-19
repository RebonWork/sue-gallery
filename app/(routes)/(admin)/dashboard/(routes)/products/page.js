"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";
import { getProduct } from "@/actions/queries";
import { useQuery } from "react-query";
import { ProductTable } from "./_components/ProductTable";
import { Card, CardContent } from "@/components/ui/card";

function Page() {
  const { data, isFetched } = useQuery("product", getProduct);

  return (
    <div className="h-screen mt-6">
      <h1> All Products</h1>
      <Card className="mt-6 p-8">
        <CardContent>
          <ProductTable isFetched={isFetched} data={isFetched && data} />
        </CardContent>
      </Card>
    </div>
  );
}

export default Page;
