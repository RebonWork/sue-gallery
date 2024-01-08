"use server"
import Category from "@/models/categorySchema";
import Product from "@/models/productModel";
import User from "@/models/userModel";

export async  function getCategory(){
    const data = await Category?.find();
    return JSON.stringify(data)
  }

export async function addNewCategory(data) {
    const category = data
    const newCategory = new Category ({category})
    newCategory.save();
}
export async function updatedCategory({id,categoryUpdate,currentCategory}){
    await Category.findByIdAndUpdate(id,{category:categoryUpdate})
    await Product.updateMany({category: currentCategory}, {category:categoryUpdate} )
}
export async function deleteCategory(id) {
    await Category.findOneAndDelete({_id:id})
    console.log("done");
}

export async function getUser(){
    const data = await User?.find();
    return JSON.stringify(data)
}

export async function updateUserRole({_id, newRole}){
    try {
        await User.findByIdAndUpdate(_id,{role:newRole})
        return("User Successfully Updated")
    } catch (error) {
        return("Error Happened Please Try Again Later")
    }

}