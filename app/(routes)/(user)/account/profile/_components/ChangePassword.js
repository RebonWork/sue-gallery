import { ChangePasswordWithCredentials } from "@/actions/authActions"
import FormButton from "@/components/Global/Button";
import Form from "@/components/Global/Form"

const ChangePassword = () => {

    async function handleChangePassword(formData){
        const old_pass= formData.get("old_pass")
        const new_pass= formData.get("new_pass")
        const res = await ChangePasswordWithCredentials({old_pass, new_pass})
        if(res?.msg) alert(res?.msg)
    }
  return (
    <div>
        <h2>ChangePassword</h2>
        <Form action={handleChangePassword}>
            <input type="password" name="old_pass" placeholder="Old Password" required/>
            <input type="password" name="new_pass" placeholder="New Password" required/>
            <FormButton value="Change Password"/>
        </Form>
    </div>
  )
}

export default ChangePassword