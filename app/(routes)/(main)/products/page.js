"use client";
import CategoryList from "./_components/CategoryList";
import ProductList from "./_components/ProductList";

export default function Page() {
  return (
    <div className="flex flex-row">
      <CategoryList/>
      <ProductList />
    </div>
  );
}
