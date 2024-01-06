"use server";
import Product from "@/models/productModel";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import connectDB from "@/utils/database";
import { deleteSingleImage } from "@/actions/siteActions";

connectDB();
export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response("not premitted");
  }
  const data = await req.json();
  const { id } = data;
  if (id) {
    const product = await Product?.findById(id);
    return new Response(JSON.stringify(product));
  } else {
    try {
      console.log(data);
      const { name, desc, price,stock,category, coverData: cover, imagesData:images } = data;
      //////////////////Saving Products To Monogo DB

      const newProduct = new Product({
        name,
        desc,
        price,
        stock,
        category,
        cover,
        images,
      });
      await newProduct.save();

      return new Response(
        JSON.stringify({ msg: "Product Added SuccessFully" })
      );
    } catch (err) {
      console.error(err);
    }
  }
}

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response("not premitted");
  }
  const products = await Product?.find();
  const dataSend = JSON.stringify(products);
  return new Response(dataSend);
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

export async function PATCH(req) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response("not premitted");
  }

  try {
    const updatedData = await req.json();

    const {
      id,
      name,
      desc,
      price,
      coverData: cover,
      imagesData: images,
    } = updatedData;

    await Product?.findByIdAndUpdate(id, {
      name: name,
      desc: desc,
      price: price,
      cover: cover,
      images: images,
    });

    return new Response(
      JSON.stringify({ msg: "Product Updated SuccessFully" })
    );
  } catch (err) {
    console.error(err);
  }
}
