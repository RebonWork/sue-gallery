
import { getUsers } from "@/actions/siteActions";
import { useEffect, useState } from "react";

const UserList = () => {
    getUsers()
  return <div>UserList</div>;
};

export default UserList;
