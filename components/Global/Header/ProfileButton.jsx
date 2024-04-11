"use client";

import Link from "next/link";
import ProfileDropdown from "./ProfileDropdown";
import { SessionProvider, useSession } from "next-auth/react";
import { User } from "lucide-react";
const ProfileButton = () => {
  const {status} = useSession();
  return (
    <SessionProvider>
      <div className="flex gap-x-4">
        {status === "authenticated" ? (
          <ProfileDropdown />
        ) : (
          <div>
            <User/>
            <Link href="/signin">Login/Register</Link>
          </div>
        )}
      </div>
    </SessionProvider>
  );
};

export default ProfileButton;
