"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Category from "@/models/categorySchema";
import Product from "@/models/productModel";
import User from "@/models/userModel";
import { getServerSession } from "next-auth";

export async function getCategory() {
  const data = await Category?.find();
  return JSON.stringify(data);
}

export async function addNewCategory(data) {
  const category = data;
  const newCategory = new Category({ category });
  newCategory.save();
}
export async function updatedCategory({ id, categoryUpdate, currentCategory }) {
  await Category.findByIdAndUpdate(id, { category: categoryUpdate });
  await Product.updateMany(
    { category: currentCategory },
    { category: categoryUpdate }
  );
}
export async function deleteCategory(id) {
  await Category.findOneAndDelete({ _id: id });
  console.log("done");
}

export async function getUser() {
  const data = await User?.find();
  return JSON.stringify(data);
}

export async function getUserById(id) {
  try {
    const data = await User?.findById(id);
    return JSON.stringify(data);
  } catch (error) {
    console.log(error);
  }
}
export async function updateUserData(userData) {
  try {
    await User.findByIdAndUpdate(userData._id, {$set: userData} ,{new: true} );
    return "User Successfully Updated"
  } catch (error) {
    console.log(error);
  }
}

export async function updateUserRole({ _id, newRole }) {
  try {
    await User.findByIdAndUpdate(_id, { role: newRole });
    return "User Successfully Updated";
  } catch (error) {
    return "Error Happened Please Try Again Later";
  }
}

export async function getSessionServer(){
  const session = await getServerSession(authOptions)
  return session
}
export async function verifyEmail({email, user}) {
  
  const token = generateToken({user})
  await sendEmail({
    to: email,
    url: `${process.env.WEBSITE_URL}/verify?token=${token}`,
    text: "VERIFY EMAIL",
  });
}
