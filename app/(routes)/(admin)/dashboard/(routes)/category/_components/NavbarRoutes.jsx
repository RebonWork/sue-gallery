"use client"
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
const NavbarRoutes = () => {
  const router = useRouter();
  return (
    <div className="flex gap-x-2 ml-auto">
      <Button onClick={() => router.push("/")} variant="ghost">Back To Home</Button>
      <Avatar>
        <AvatarImage src="/avatar.jpg" alt="Avatar" />
      </Avatar>
    </div>
  );
};

export default NavbarRoutes;
