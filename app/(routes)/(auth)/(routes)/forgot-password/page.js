"use client";
import { ForgotPasswordWithCredentials } from "@/actions/authActions";
import FormButton from "@/components/Global/Button";;
import Form from "@/components/Global/Form";
import React from "react";

const Page = () => {
  async function handleForgotPassword(formData) {
    const email = formData.get("email");
    const res = await ForgotPasswordWithCredentials({ email });
    if (res?.msg) alert(res?.msg);
  }
  return (
    <Form action={handleForgotPassword}>
      <input type="email" name="email" placeholder="Email" required />
      <FormButton value="Forgot Password" />
    </Form>
  );
};

export default Page;
