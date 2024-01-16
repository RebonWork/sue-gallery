"use server";
import Product from "@/models/productModel";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import connectDB from "@/utils/database";
import { NextResponse } from "next/server";
import Category from "@/models/categorySchema";

connectDB();
export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new NextResponse("not premitted", { status: 401 });
  }
  try {
    const data = await req.json();
    const getcategory = await Category.findById(data.category);
    const category = { id: getcategory._id, name: getcategory.category };
    const newProduct = await new Product({...data,category: category});
    await newProduct.save();
    return new NextResponse(newProduct);
  } catch (err) {
    return new NextResponse("[PRODUCT]", err);
  }
}

export async function GET() {
  const products = await Product?.find();
  const dataSend = JSON.stringify(products);
  return new Response(dataSend);
}
