"use client";
import UpdateSingleProduct from "./_components";
import { useParams } from "next/navigation";

function Page() {
  const { id } = useParams();
  
  return <UpdateSingleProduct id={id} />;
}

export default Page;
