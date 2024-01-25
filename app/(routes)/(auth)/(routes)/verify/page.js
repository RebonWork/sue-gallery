"use server";
import { verifyEmail } from "@/actions/serverActions";
import { Button } from "@/components/ui/button";
import axios from "axios";

const verifyPage = async ({ searchParams: { token } }) => {
  const res = await axios.post("http://localhost:3000/api/user/verify", {
    token,
  });
  const { data } = res;

  return (
    <>
      <h1>{data}</h1>
      {data === "Link Expired Please Try Again" && <Button>Resend Verification Email</Button>}
    </>
  );
};

export default verifyPage;
