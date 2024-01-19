import React from "react";
import { getSessionServer } from "@/actions/serverActions";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import PersonIcon from "@mui/icons-material/Person";
import DashboardLink from "./DashboardLink";
import { CircleUserRound } from "lucide-react";
import SignOut from "@/app/(routes)/(auth)/_component/SignOut";
import Link from "next/link";
const ProfileDropdown = async () => {
  const session = await getSessionServer();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <PersonIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <CircleUserRound className="mr-2 h-4 w-4" />
          <Link href="/account/profile">Profile</Link>
        </DropdownMenuItem>
        {session?.user.role === "admin" && (
          <DropdownMenuItem>
            <DashboardLink />
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
