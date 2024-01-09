"use server";
import { getSessionServer } from "@/actions/serverActions";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";
import ProfileDropdown from "./ProfileDropdown";
const ProfileButton =  () => {
  async function getSession(){
    var data = await getSessionServer();
    return data
  }
  const session = getSession();
  return (
    <div className="flex gap-x-4">
      {session ? (
        <ProfileDropdown />
      ) : (
        <div>
          <PersonIcon />
          <Link href="/signin">Login/Register</Link>
        </div>
      )}
    </div>
  );
};

export default ProfileButton;
