"use client"
import React from "react";
import { useSession } from "next-auth/react";

const ProtectedComponent = ({user}) => {
  const { data: session } = useSession();
  return (
    <div>
      <p>
        You are logged in as <b>{session?.user?.name || user?.name}</b>
      </p>
    </div>
  );
};

export default ProtectedComponent;
