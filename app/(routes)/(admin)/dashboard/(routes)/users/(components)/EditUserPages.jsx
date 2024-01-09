import { getUserById, updateUserData } from "@/actions/serverActions";
import React, { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";

const EditUserPages = ({ id }) => {
  const { toast } = useToast();
  const [userData, setUserData] = useState({
    _id: "",
    name: "",
    email: "",
    image: "",
    role: "",
    provider: "",
    cartItemsId: [],
    wishlistItemsId: [],
    pastOrderID: [],
    reviews: [],
  });
  useEffect(() => {
    const controller = new AbortController();
    async function userData() {
      const res = JSON.parse(await getUserById(id));
      setUserData(res);
    }
    userData();
    return () => {
      controller.abort();
    };
  }, [id]);
  function handleData(e) {
    const name = e.target.name;
    setUserData({ ...userData, [name]: e.target.value });
  }
  async function handelUpateData() {
    const msg = await updateUserData(userData);
    toast({
        variant:"success",
        description: msg,
      });
  }
  return (
    <div>
        <Image src={userData?.image} width={100} height={100} alt="User Profile Picture"/>
      <input defaultValue={userData.name} name="name" onChange={handleData} />
      <input defaultValue={userData.email} name="email" onChange={handleData} />
      <button onClick={handelUpateData}>Update User</button>
    </div>
  );
};

export default EditUserPages;
