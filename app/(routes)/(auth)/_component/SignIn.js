"use client";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SubmitFormButton } from "../../(admin)/dashboard/(routes)/products/(routes)/_components/SubmitFormButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { PasswordInputField } from "./PasswordInputField";
import { Button } from "@/components/ui/button";
import { EmailInputField } from "./EmailInputField";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignIn = ({ callbackUrl }) => {
  const router = useRouter();
  const loginFormSchema = z.object({
    email: z.string().email().min(1, { message: "Required" }),
    password: z.string().min(1, { message: "Required" }),
  });
  const form = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const {
    formState: { isSubmitting, isValid },
  setError} = form;

  async function handelCredentialsLogin(data) {
    
    try {
      const res = await signIn("credentials", { ...data, redirect: false });
      const { status, error } = res;
      if (res.status === 200) {
        router.push(callbackUrl || "/");
      }
      if (status === 401) {
        error === "Password does not match" && setError("password", { message: error });
        error === "Email doesn't Exist" && setError("email", { message: error });
      }
      
    } catch (error) {
      error === "Password doesn't match" && console.log("Incorrect Password");
      error === "Email doesn't match" && console.log("Incorrect Email");
    }
  }

  return (
    <div className="h-[100dvh]">
      <div className="h-full flex justify-center items-center bg-gradient-to-r from-indigo-500">
        <Card className="w-96 border-1 border-slate-200">
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Don&apos;t have an account?
              <Link href="/signup">
                <Button variant="link">Sign Up</Button>
              </Link>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                id="login-form"
                onSubmit={form.handleSubmit(handelCredentialsLogin)}
              >
                <EmailInputField control={form.control} />
                <PasswordInputField control={form.control} />
              </form>
            </Form>
          </CardContent>
          <CardFooter>
            <SubmitFormButton isSubmitting={isSubmitting} formId="login-form">
              Sign In
            </SubmitFormButton>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;
