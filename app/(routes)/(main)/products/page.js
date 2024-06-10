"use client";
import CategoryList from "./_components/CategoryList";
import ProductList from "./_components/ProductList";
import {useState} from "react";

export default function Page() {
    const [activeFilter, setActiveFilter] = useState(null);
  return (
    <div className="flex flex-row">
      <CategoryList activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <ProductList activeFilter={activeFilter} />

    </div>
  );
}
