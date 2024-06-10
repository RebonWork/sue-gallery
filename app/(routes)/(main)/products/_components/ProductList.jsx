"use client";
import { useQuery } from "react-query";
import { v4 } from "uuid";
import { getProduct } from "@/actions/queries";
import ProductCard from "./ProductCard";

export default function ProductList({activeFilter}) {
  const { data, isFetched } = useQuery("product", getProduct);
  const activeData = data?.filter((product) => product.isActive === true);
  const filteredProducts= activeData?.filter((product) => activeFilter === null ? product: product.category.id === activeFilter);
  console.log(activeData);
  function mapProducts(prod) {
    return (
      <ProductCard key={v4()} id = {prod._id} imageUrl = {prod.cover.url} name = {prod.name} price = {prod.price} />
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {isFetched && activeData ? filteredProducts?.map(mapProducts) :<h5>Loading</h5>}
    </div>
  );
}
