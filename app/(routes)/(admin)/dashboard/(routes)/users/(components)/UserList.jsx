import { getUser } from "@/actions/serverActions";
import { useEffect, useState } from "react";
import UserItem from "./UserItem";
import { v4 } from "uuid";
import { useRouter } from "next/navigation";

const UserList = () => {
  const router = useRouter();

  function editUser(id) {
    router.push(`/dashboard/users/${id}`);
  }

  function handleUserData(data) {
    return <UserItem editUser={editUser} key={v4()} data={data} />;
  }

  const [users, setUser] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    async function userData() {
      const res = JSON.parse(await getUser());
      setUser(res);
    }
    userData();
    return () => {
      controller.abort();
    };
  }, []);
  return <div>{users.map(handleUserData)}</div>;
};

export default UserList;
