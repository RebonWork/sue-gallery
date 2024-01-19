"use server"
import { deleteSingleImage } from "@/actions/siteActions";
import Product from "@/models/productModel";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import Category from "@/models/categorySchema";


export async function GET(res,req) {  
const id = req?.params.productId
const data = await Product.findById(id)
const dataSend = JSON.stringify(data)
 return new NextResponse(dataSend)
}

export async function DELETE(req, res) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response("not premitted");
  }

  try {
    const {params:{productId:id}} = res
    const product = await Product?.findById(id);
    product?.cover.publicID && deleteSingleImage(product?.cover?.publicID);
    product?.images && product?.images?.map((image) => deleteSingleImage(image?.publicID));
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
    console.log(data);
    const category = await Category.findById(data.category)
    const {productId} =req.params
    await Product?.findByIdAndUpdate(productId, {...data, category:{id:category._id, name:category.category}});

    return new Response(
      JSON.stringify({ msg: "Product Updated SuccessFully" })
    );
  } catch (err) {
    console.error(err);
  }
}
