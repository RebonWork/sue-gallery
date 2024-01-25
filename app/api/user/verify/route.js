import User from "@/models/userModel";
import { verifyToken } from "@/utils/token";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    const {token} = await req.json();
  try {
    const { user } = verifyToken(token);
    const userExist = await User.findOneAndUpdate({ email: user.email }, { isEmailVerified: true });
    if (!userExist) throw new NextResponse("User Does Not Exist", { status: 404 });
    if (userExist) return new NextResponse("Email Has Been Verified Successfully", { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse("Link Expired Please Try Again");
  }
}
