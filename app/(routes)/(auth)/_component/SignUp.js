"use client";
import { signUpCredentials } from "@/actions/authActions";
import { Form } from "@/components/ui/form";
import { SubmitFormButton } from "../../(admin)/dashboard/(routes)/products/(routes)/_components/SubmitFormButton";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FirstNameField } from "./FirstNameField";
import { LastNameField } from "./LastNameField";
import { EmailInputField } from "./EmailInputField";
import { PasswordInputField } from "./PasswordInputField";
import { ConfirmPasswordField } from "./ConfirmPasswordField";
import axios from "axios";
import { Button } from "@/components/ui/button";

const SignUp = () => {
  const userSchema = z
    .object({
      firstName: z.string().min(1, { message: "Required" }),
      lastName: z.string().min(1, { message: "Required" }),
      email: z.string().min(1, { message: "Required" }),
      password: z.string().min(8, { message: "Required" }),
      confirmPassword: z.string().min(8, { message: "Required" }),
    })
    .refine(
      (values) => {
        return values.password === values.confirmPassword;
      },
      {
        message: "Passwords must match!",
        path: ["confirmPassword"],
      }
    );
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(userSchema),
  });
  const {
    formState: { isSubmitting },reset
  } = form;

  async function handleSignUpCredentials(data) {
    delete data.confirmPassword;
    console.log(data);
    try {
      const addUser = await axios.post("/api/user", data);
      alert(addUser.data);
      reset();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="h-[100dvh]">
      <div className="h-full flex justify-center items-center bg-gradient-to-r from-indigo-500">
        <Card className="w-[500px] border-1 border-slate-200">
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>
              Enter your details below to sign up
            </CardDescription>
          </CardHeader>
          <CardContent >
            <Form {...form}>
              <form
                id="userSignUp"
                onSubmit={form.handleSubmit(handleSignUpCredentials)}
                className="flex flex-col gap-2"
              >
                <div className="flex flex-row gap-3 w-full items-center">
                  <FirstNameField control={form.control}></FirstNameField>
                  <LastNameField control={form.control}></LastNameField>
                </div>
                <EmailInputField control={form.control}></EmailInputField>
                <PasswordInputField control={form.control}></PasswordInputField>
                <ConfirmPasswordField
                  control={form.control}
                ></ConfirmPasswordField>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-row gap-2 justify-center">
            <SubmitFormButton formId="userSignUp" isSubmitting={isSubmitting}>
              Sign Up
            </SubmitFormButton>
            <Button>
              <Link href="/signin">Already have an account? Sign in</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
