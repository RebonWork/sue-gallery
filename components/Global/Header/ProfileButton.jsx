"use client";
import { getSessionServer } from "@/actions/serverActions";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";
import ProfileDropdown from "./ProfileDropdown";
import { SessionProvider, useSession } from "next-auth/react";
const ProfileButton = () => {
  const {status} = useSession();
  return (
    <SessionProvider>
      <div className="flex gap-x-4">
        {status === "authenticated" ? (
          <ProfileDropdown />
        ) : (
          <div>
            <PersonIcon />
            <Link href="/signin">Login/Register</Link>
          </div>
        )}
      </div>
    </SessionProvider>
  );
};

export default ProfileButton;
