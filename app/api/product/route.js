import Product from "@/models/productModel";

export async function POST(req){
    const data = await req.json()
    const newProduct = new Product(data)
    await newProduct.save()
    return new Response("Ok")
}
export async function GET(){
    const products = await Product.find()
    const dataSend = JSON.stringify(products)
    return new Response(dataSend)
}