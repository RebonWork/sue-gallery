"use client";

import { getCategory } from "@/actions/queries";
import CategoryTable from "./_components/Category Table/CategoryTable";
import { useQuery } from "react-query";
import { AddNewCategoryForm } from "./_components/AddNewCategoryForm";

export default function Page() {
  const { data , isFetched } = useQuery("category", getCategory);

  return (
    <div className="flex flex-col gap-6 mt-8">
      <div className="flex justify-center items-center ml-8 py-6 bg-white drop-shadow-sm rounded-lg w-[500px]">
        <AddNewCategoryForm />
      </div>
      <div className="bg-white mx-8 drop-shadow-sm rounded-lg p-2">
        <div className="px-12 mt-6">
          <CategoryTable data={data} isFetched={isFetched} />
        </div>
      </div>
    </div>
  );
}
