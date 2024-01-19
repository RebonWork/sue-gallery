"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import connectDB from "@/utils/database";
import User from "@/models/userModel";
import bcrypt from "bcrypt";
import { generateToken } from "@/utils/token";
import sendEmail from "@/utils/sendEmail";

connectDB();
export async function POST(req) {
  const data = await req.json();
  const user = await User.findOne({ email: data.email });
  try {
    if (user) {
      console.log("user already exist");
      return new Response("user already exist");
    }
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 12);
    }
    const token = generateToken({ user: data });
    await sendEmail({
      to: data.email,
      url: `${process.env.WEBSITE_URL}/verify?token=${token}`,
      text: "VERIFY EMAIL",
  });
      const newUser = new User(data);
      await newUser.save();
      return new Response("Sign Up Success! Check Your Email to complete the registeration");
  } catch (error) {
    console.log(error);
  }
}

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response("not premitted");
  }
  try {
    const data = await User.find();
    return new Response(JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
}
