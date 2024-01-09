"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Form from "../../../../components/Global/Form";
import Button from "../../../../components/Global/Button";
import { ForgotPasswordWithCredentials } from "@/actions/authActions";


const SignIn = ({ callbackUrl }) => {

  async function handelCredentialsLogin(formData){
    const email = formData.get("email")
    const password= formData.get("password")
    await signIn('credentials', {email,password,callbackUrl})
  }

  async function handleForgotPassword(formData){
    const email = formData.get('email')
    const res = await ForgotPasswordWithCredentials({email})
    if (res?.msg) alert(res?.msg)
  }
  return (
    <div>

      {/*Google Login*/}
      <div style={{ margin: "30px 0" }}>
        <button onClick={() => signIn("google", { callbackUrl: callbackUrl })}>
          Continue With Google
        </button>
      </div>

      {/*Credentials Login*/}
      <Form action={handelCredentialsLogin}>
        <input type="email" name="email" placeholder="Email" required/>
        <input type="password" name="password" placeholder="Password" required/>
        <Button value="Credentials Login"/>
      </Form>

      {/*Forgot Password*/}
      <Form action={handleForgotPassword}>
        <input type="email" name="email" placeholder="Email" required/>
        <Button value="Forgot Password"/>
      </Form>

      <div>
        <Link href={"/signup"}>Sign Up</Link>
      </div>
    </div>
  );
};

export default SignIn;
