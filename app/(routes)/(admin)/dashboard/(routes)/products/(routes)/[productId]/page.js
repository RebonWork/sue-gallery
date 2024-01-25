"use client";

import { useParams } from "next/navigation";
import { useQuery } from "react-query";
import UpdateProductForm from "./_components/update-product";
import { getProductById } from "@/actions/queries";
import ProductMangmentSkelaton from "../_components/ProductMangmentSkelaton";

function Page() {
  const { productId } = useParams();
  const { data, isFetched } = useQuery(["product", productId], () =>
    getProductById(productId)
  );

  return (
    <div className="mt-6 px-4">
      {isFetched ? (
        <UpdateProductForm data={data} id={productId} />
      ) : (
        <ProductMangmentSkelaton />
      )}
    </div>
  );
}

export default Page;
