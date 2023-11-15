"use server"
import Product from "@/models/productModel";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";





export async function POST(req){
    const session = await getServerSession(authOptions)
    if(!session){
        return new Response("not premitted")
    }

    try{
        const data = await req.json()
        const {name,desc,price}=data
        const imagesUrl = data.encodedImage
        const imageLinks =[]

        const imageUploader = imagesUrl.map(async (singleImage)=> {await fetch(`${process.env.NEXTAUTH_URL}/api/upload`,{
            method:"POST",
            body:JSON.stringify(singleImage)
          })
          .then(async response => { 
            const link = await response.json();
            await imageLinks.push(link)
        });
          })

          return Promise.all(imageUploader).then(async() => {
            const newProduct = new Product({name,desc,price,images:imageLinks})
            await newProduct.save()
            return new Response(JSON.stringify({msg: "Product Added SuccessFully"}))
        });
          




    } catch(err){
        console.error(err)
    }

}


export async function GET(){
    const session = await getServerSession(authOptions)
    if(!session){
        return new Response("not premitted")
    }

    const products = await Product?.find()
    const dataSend = JSON.stringify(products)
    return new Response(dataSend)
}