"use client"
import { signUpCredentials } from "@/actions/authActions"
import Button from "../../../../components/Global/Button"
import Form from "../../../../components/Global/Form"
import Link from "next/link"


const SignUp = () => {

    async function handleSignUpCredentials(formData){
        const name =formData.get('name')
        const email =formData.get('email')
        const password =formData.get('password') 

        const res = await signUpCredentials({name,email,password})
        if(res?.msg) alert(res?.msg)
    }
    return (
    <div>
    <h2>Sign Up With NextAuth</h2>
    <Form action={handleSignUpCredentials}>
        <input type="text" name="name" placeholder="Name" required/>
        <input type="email" name="email" placeholder="Email" required/>
        <input type="password" name="password" placeholder="Password" required/>
        <Button value={"Register"}/>
    </Form>

    <div>
        <Link href={"/signin"}>Sign In</Link>
      </div>
    </div>
  )
}

export default SignUp