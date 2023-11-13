"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/userModel";
import { getServerSession } from "next-auth";
import { RedirectType, redirect } from "next/navigation";
import bcrypt, { hash } from "bcrypt";
import { generateToken, verifyToken } from "@/utils/token";
import sendEmail from "@/utils/sendEmail";

const BASE_URL = process.env.NEXTAUTH_URL;

export async function updateUser({ name, image }) {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorization !!!");

  try {
    const user = await User.findByIdAndUpdate(
      session?.user?._id,
      { name, image },
      { new: true }
    ).select("-password");
    if (!user) throw new Error("Email does not exist!");

    return { msg: "Update Profile Successfully" };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
}

export async function signUpCredentials(data) {
  try {
    const user = await User.findOne({ email: data.email });
    if (user) throw new Error("Email Already Exists!");

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 12);
    }

    const token = generateToken({ user: data });

    await sendEmail({
      to: data.email,
      url: `${BASE_URL}/verify?token=${token}`,
      text: "VERIFY EMAIL",
    });
    return {
      msg: "Sign Up Success! Check Your Email to complete the registeration",
    };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
}

export async function verifyWithCredentials(token) {
  try {
    const { user } = verifyToken(token);
    const userExist = await User.findOne({ email: user.email });
    if (userExist) return { msg: "Verify Success" };

    const newUser = new User(user);
    await newUser.save();
    return {
      msg: "Verify Success!",
    };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
}

export async function ChangePasswordWithCredentials({ old_pass, new_pass }) {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized!");
  try {
    const user = await User.findById(session?.user?._id);
    if (!user) throw new Error("User Doesn't Exist");

    if (session?.user?.provider !== "credential") {
      throw new Error(
        `This account is Signed In With ${session?.user?.provider}. You Can't user this function`
      );
    }
    const compare = await bcrypt.compare(old_pass, user.password);
    if (!compare) throw new Error("Old Password Doesn't Match. Try Again!");
    const newPass = await bcrypt.hash(new_pass, 12);

    await User.findByIdAndUpdate(user._id, { password: newPass });
    return {
      msg: "Password Successfully Changed!",
    };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
}

export async function ForgotPasswordWithCredentials({ email }) {
  
  
  try {
    const user = await User.findOne({email});
    if (!user) throw new Error("Enail Doesn't Exist");

    if (user?.provider !== "credential") {
      throw new Error(
        `This account is Signed In With ${user?.provider}. You Can't user this function`
      );
    }
    const token =  generateToken({userId : user._id})
    await sendEmail({
      to:email,
      url: `${BASE_URL}/reset-password?token=${token}`,
      text:"RESET PASSWORD"
    })

    
    return {
      msg: "Check Your Email To Reset Your Password",
    };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
}
export async function resetPasswordWithCredentials({ token ,password }) {
  try {
    const {userId}  = verifyToken(token.token);
    const newPass = await bcrypt.hash(password,12)
    await User.findByIdAndUpdate(userId,{ password:newPass })
    
    return {
      msg: "Success! Password Has Been Reset",
    };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
}

export async function isAdmin(){
  const session = await getServerSession(authOptions);
  console.log(session);
}