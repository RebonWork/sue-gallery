"use client";

import { signOut } from "next-auth/react";
import { MdLogout } from "react-icons/md";

const SignOut = () => {
  return (
    <button className="sidebar-item" onClick={signOut}>
      <MdLogout />
      <h1>SignOut</h1>
    </button>
  );
};

export default SignOut;
