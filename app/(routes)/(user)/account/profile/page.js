"use client";
import { verifyEmail } from "@/actions/serverActions";
import { Button } from "@/components/ui/button";
import { generateToken } from "@/utils/token";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data } = useSession();
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
      {data?.user?.inEmailVerified === false ? (
        "Email Verified"
      ) : (
        <Button onClick={handleVerifyEmail}>Verify Email</Button>
      )}
    </div>
  );
}
