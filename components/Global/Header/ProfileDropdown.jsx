"use client"
import { LayoutDashboard, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { CircleUserRound } from "lucide-react";
import SignOut from "@/app/(routes)/(auth)/_component/SignOut";
import Link from "next/link";
import { useSession } from "next-auth/react";
const ProfileDropdown =  () => {
const { data: session } = useSession();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <User />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <CircleUserRound className="mr-2 h-4 w-4" />
          <Link href="/account/profile">Profile</Link>
        </DropdownMenuItem>
        {session?.user?.role === "admin" && (
          <DropdownMenuItem>
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <Link href="/dashboard/analytics">Dashboard</Link>
          </DropdownMenuItem>
        )}

        <DropdownMenuItem>
          <SignOut />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
