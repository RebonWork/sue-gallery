"use server";
import Product from "@/models/productModel";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import connectDB from "@/utils/database";
import { images } from "@/next.config";
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
      const { name, desc, price } = data;
      const imagesUrl = data.encodedImage;
      const coverImage = data.encodedCoverImage;
      const images = [];
      //////////Cover Image Uploader To Cloudinary
      const cover = await fetch(`${process.env.NEXTAUTH_URL}/api/upload`, {
        method: "POST",
        body: JSON.stringify(coverImage),
      }).then(async (response) => await response.json());
      //////////////Product Image Uploader To Cloudinary
      const imageUploader = imagesUrl.map(async (singleImage) => {
        await fetch(`${process.env.NEXTAUTH_URL}/api/upload`, {
          method: "POST",
          body: JSON.stringify(singleImage),
        }).then(async (response) => {
          const imageData = await response.json();
          const { url, publicID } = imageData;
          await images.push({ url, publicID });
        });
      });
      //////////////////Saving Products To Monogo DB
      return Promise.all(imageUploader).then(async () => {
        const newProduct = new Product({
          name,
          desc,
          price,
          cover: cover,
          images: images,
        });
        await newProduct.save();
        return new Response(
          JSON.stringify({ msg: "Product Added SuccessFully" })
        );
      });
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
    const deleteCover = deleteSingleImage(cover?.publicID)
    const deleteImages = images.map((image)=> deleteSingleImage(image.publicID))


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
    const updateData = await req.json();
    const {
      id,
      updateName: name,
      updateDesc: desc,
      updatePrice: price,
      updateCover: cover,
      updateImages: images,
    } = updateData;
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
