"use client";

import { getCategory } from "@/actions/queries";
import CategoryTable from "./_components/CategoryTable";
import { useQuery } from "react-query";
import { AddNewCategoryForm } from "./_components/AddNewCategoryForm";

export default function Page() {
  const { data , isFetched } = useQuery("category", getCategory);

  return (
    <div>
      <div className="px-10">
        <AddNewCategoryForm />
      </div>
      <div>
        <div className="px-12 mt-6">
          <CategoryTable data={data} isFetched={isFetched} />
        </div>
      </div>
    </div>
  );
}
