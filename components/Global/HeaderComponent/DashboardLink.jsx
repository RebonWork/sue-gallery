"use server";
import { getSessionServer } from "@/actions/serverActions";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";
const DashboardLink = async () => {
  const session = await getSessionServer();

  return (
    session?.user.role === "admin" && (
      <>
        <LayoutDashboard className="mr-2 h-4 w-4" />
        <Link href="/dashboard">Dashboard</Link>
      </>
    )
  );
};

export default DashboardLink;
