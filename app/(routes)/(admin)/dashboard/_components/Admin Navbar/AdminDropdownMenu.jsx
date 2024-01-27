import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { LogOut, Settings } from "lucide-react";
import Link from "next/link";

const AdminDropdownMenu = () => {
  const { data } = useSession();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none border-none">
        <Avatar>
          <AvatarImage src="/avatar.jpg" alt="Avatar" />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-1.5">
        <DropdownMenuLabel className="flex flex-row gap-4 px-2 mr-6">
          <Avatar>
            <AvatarImage src="/avatar.jpg" alt="Avatar" />
          </Avatar>
          <div className=" flex flex-col gap-y-0.5">
            <h1>{data?.user?.name}</h1>
            <h1 className="text-xs text-slate-500 font-normal">{data?.user?.email}</h1>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="flex flex-row h-10 gap-x-2 items-center pl-4">
            <Settings size={18} />
            <Link href={"/account/manage"}>Manage Account</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex flex-row h-10 gap-x-2 items-center pl-4" onClick={signOut}>
            <LogOut size={18} />
            <h1>SignOut</h1>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AdminDropdownMenu;
