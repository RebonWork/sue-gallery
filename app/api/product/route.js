"use server"
import Product from "@/models/productModel";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";





export async function POST(req){
    const session = await getServerSession(authOptions)
    if(!session){
        return new Response("not premitted")
    }

    var timestamp = Math.round((new Date).getTime()/1000);
    
    try{
        ////////////////////////////////////////////////// IMAGE UPLOAD\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        const data = await req.json()
        const fileStr = data.image
        const sendData = new FormData();
        sendData.append("file",fileStr)
        sendData.append("upload_preset","my-uploads")
        const upload = await fetch("https://api.cloudinary.com/v1_1/sue-gallery/image/upload",{
            method:"POST",
            body: sendData
        }).then(r=>r.json())
        const imageUrl = upload.secure_url

        ////////////////////////////////////////////////// SAVE TO DB\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        const newProduct = new Product({...data,image:imageUrl})
        await newProduct.save()
        return new Response("Ok")
    } catch(err){
        console.error(err)
    }

}
export async function GET(){
    const session = await getServerSession(authOptions)
    if(!session){
        return new Response("not premitted")
    }

    const products = await Product.find()
    const dataSend = JSON.stringify(products)
    return new Response(dataSend)
}