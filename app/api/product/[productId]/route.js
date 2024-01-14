"use server"
import { deleteSingleImage } from "@/actions/siteActions";
import Product from "@/models/productModel";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";


export async function GET(res,req) {  
const id = req?.params.productId
const data = await Product.findById(id)
const dataSend = JSON.stringify(data)
 return new NextResponse(dataSend)
}

export async function DELETE(req) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response("not premitted");
  }

  try {
    const id = await req.json();
    const product = await Product?.findById(id);
    const { cover, images } = product;
    const deleteCover = deleteSingleImage(cover?.publicID);
    const deleteImages = images.map((image) =>
      deleteSingleImage(image.publicID)
    );

    await Product?.findOneAndDelete({ _id: id });

    return new Response(JSON.stringify("DELETED SUCCESS"));
  } catch (err) {
    console.error(err);
  }
}
export async function POST(req) {
  try {
  } catch (error) {}
}
export async function PATCH(res,req) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response("not premitted");
  }
      
  try {
    const data = await res.json()
    const {productId} =req.params
    await Product?.findByIdAndUpdate(productId, data);

    return new Response(
      JSON.stringify({ msg: "Product Updated SuccessFully" })
    );
  } catch (err) {
    console.error(err);
  }
}
