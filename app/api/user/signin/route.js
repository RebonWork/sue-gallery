import { data } from "autoprefixer";
import { signIn } from "next-auth/react";
import { NextResponse } from "next/server";
export async function POST(req) {
  const data = await req.json();
  console.log(data);
  const { email, password} = data;
  try {
    await signIn("credentials", { email, password});
    return new NextResponse("Sign In Success", { status: 200 });
  } catch (error) {
    console.log("SIGN IN ERROR: ", error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
