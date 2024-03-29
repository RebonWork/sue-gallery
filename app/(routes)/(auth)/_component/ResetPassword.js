"use client"
import { resetPasswordWithCredentials } from "@/actions/authActions"
import FormButton from "@/components/Global/Button";
import Form from "@/components/Global/Form"

const ResetPasswordComponent = ({token}) => {

    async function handleResetPassword(formData){
        const password = formData.get("password")
        const res = await resetPasswordWithCredentials({token, password})
        if(res?.msg) alert(res?.msg)
    }

  return (
    <div>
        <h1>Reset Password</h1>
        <Form action={handleResetPassword}>
            <input type="password" name="password" placeholder="Password" required/>
            <FormButton value="Reset Password"/>
        </Form>
    </div>
  )
}

export default ResetPasswordComponent