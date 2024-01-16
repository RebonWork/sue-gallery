import Category from "@/models/categorySchema";
import { NextResponse } from "next/server";

export async function POST(req){
    const data = await req.json()
    const addCategory = new Category({
        category: data.category
    })
    await addCategory.save()
    return new NextResponse ("done")
}
export async function GET(){
    const data = await Category.find()
    return new NextResponse(JSON.stringify(data))
}