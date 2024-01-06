"use server"
import Category from "@/models/categorySchema";

export async  function getCategory(){
    const data = await Category?.find();
    return JSON.stringify(data)
  }

export async function addNewCategory(data) {
    const category = data
    const newCategory = new Category ({category})
    newCategory.save();
}
export async function deleteCategory(id) {
    await Category.findOneAndDelete({_id:id})
    console.log("done");
}