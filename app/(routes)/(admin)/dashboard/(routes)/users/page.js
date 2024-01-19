"use client";
import { useQuery } from "react-query";
import UserTable from "./(components)/UserTable";
import { getUser } from "@/actions/queries";

export default function Page() {
  const { data, isFetched } = useQuery("user", getUser);
  return (
    <div className="px-10 mt-6">
      <h1 className="text-5xl font-black">Users</h1>
      <div  className="px-24 mt-8">{!isFetched ? "loading" : <UserTable data={data} />}</div>
    </div>
  );
}
