"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AdminDropdownMenu from "./AdminDropdownMenu";
const NavbarRoutes = () => {
  return (
    <div className="flex gap-x-2 ml-auto">
      <Button variant="ghost"><Link href={"/"}>Back Home</Link></Button>
      <AdminDropdownMenu/>
    </div>
  );
};

export default NavbarRoutes;
