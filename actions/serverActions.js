"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { sendVerificationEmail } from "@/utils/sendEmail";
import { generateToken } from "@/utils/token";
import { getServerSession } from "next-auth";


export async function getSessionServer(){
  const session = await getServerSession(authOptions)
  return session
}
export async function verifyEmail({email, user}) {
  
  const token = generateToken({user})
  await sendVerificationEmail({
    to: email,
    url: `${process.env.WEBSITE_URL}/verify?token=${token}`,
    user: user
  });
}
