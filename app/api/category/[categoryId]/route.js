import Category from "@/models/categorySchema";
import Product from "@/models/productModel";
import { NextResponse } from "next/server";

export async function DELETE(req, res) {
  const { params } = res;
  try {
    console.log(res);
    const deleteCategory = await Category.findByIdAndDelete(params.categoryId);
  }catch (error) {
    console.log(error)
  }
  return new NextResponse("done");
}
export async function PATCH(req, res) {
  try {
    const {
      params: { categoryId: id },
    } = res;
    const { category } = await req.json();
    const updateCategory = await Category.findByIdAndUpdate(id, { category });
    const updateProduct = await Product.updateMany(
      { "category.id": id }, { $set: {"category.name": category}}
    );
    return new NextResponse("done");
  } catch (error) {
    console.log("CATEGORY_ID:", error);
    return new NextResponse("error", { status: 500 });
  }
}
