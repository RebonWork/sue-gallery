"use client";
import { verifyEmail } from "@/actions/serverActions";
import { Button } from "@/components/ui/button";
import { generateToken } from "@/utils/token";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data } = useSession();
  console.log(data);
  
  async function handleVerifyEmail() {
    try {
      verifyEmail({ email: data?.user?.email, user:data?.user });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
    <h1>{data?.user?.email}</h1>
      {data?.user?.isEmailVerified === true ? (
        "Email Verified"
      ) : (
        <Button onClick={handleVerifyEmail}>Verify Email</Button>
      )}
    </div>
  );
}
