import { getUser } from "@/actions/serverActions";
import { useEffect, useState } from "react";
import UserItem from "./UserItem";
import { v4 } from "uuid";

const UserList = () => {
  function handleUserData(data) {
    return (
      <UserItem key={v4()} data={data}/>
    );
  }

  const [users, setUser] = useState([]);
  useEffect(() => async () => {
    const res = JSON.parse(await getUser());
    setUser(res);
  },[]);
  return (
    <div>
      {users.map(handleUserData)}
    </div>
  );
};

export default UserList;
