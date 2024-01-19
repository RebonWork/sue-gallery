"use client";
import { useQuery } from "react-query";
import { getUserById } from "@/actions/queries";
import ManageUserPage from "../(components)/ManageUserPage";
export default function Page({params:{id:userId}}) {
  const { data, isFetched } = useQuery(['user', userId], () => getUserById(userId))
  return isFetched && <ManageUserPage data={data}/>
}
