import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import User from "@/models/userModel";

export async function GET(req, res) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response("not premitted");
  }
  const { params } = res;
  try {
    const userById = await User.findById(params.userId);
    return new NextResponse(JSON.stringify(userById));
  } catch (error) {
    console.log(error);
  }
}
export async function PATCH(req, res) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response("not premitted");
  }
  const { params } = res;
  const user = await req.json()
  try {
    const UpdateUser = await User.findByIdAndUpdate(params.userId, user)
    return new NextResponse("done");
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(req, res) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response("not premitted");
  }
  const { params } = res;
  try {
    const deleteUser = await User.findByIdAndDelete(params.userId);
    return new NextResponse("done");
  } catch (error) {
    console.log(error);
  }
}
