"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import connectDB from "@/utils/database";
import User from "@/models/userModel";

connectDB();
export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response("not premitted");
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
