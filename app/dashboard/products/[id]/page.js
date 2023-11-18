"use client";
import DashboardProduct from "@/components/Dashboard/DashboardSingleProduct";
import { useParams } from "next/navigation";

function Page() {
  const { id } = useParams();
  
  return <DashboardProduct id={id} />;
}

export default Page;
