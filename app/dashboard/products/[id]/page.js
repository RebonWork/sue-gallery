"use client";
import DashboardProductPage from "@/components/Dashboard/DashboardProductPage";
import { useParams } from "next/navigation";


const Page = () => {
  const { id } = useParams();

  
  return <DashboardProductPage id={id}/>


};

export default Page;
