"use client";

import { signOut } from "next-auth/react";
import { MdLogout } from "react-icons/md";

const SignOut = () => {
  return (
    <button className="sidebar-item" onClick={signOut}>
      <MdLogout />
      <span>SignOut</span>
    </button>
  );
};

export default SignOut;
