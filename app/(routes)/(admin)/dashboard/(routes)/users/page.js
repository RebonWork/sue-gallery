"use client";
import { useQuery } from "react-query";
import UserTable from "./_components/UserTable";
import { getUser } from "@/actions/queries";

export default function Page() {
  const { data, isFetched } = useQuery("user", getUser);
  return (
    <div className="px-10 mt-6 h-screen">
      <h1 className="text-5xl font-black">Users</h1>
      <div className="mt-8 bg-white shadow-sm rounded-md p-6">
        <UserTable data={data} isFetched={isFetched} />
      </div>
    </div>
  );
}
