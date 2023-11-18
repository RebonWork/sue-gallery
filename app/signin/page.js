import SignIn from "@/components/Auth/SignIn";

export default function Page({ searchParams: { callbackUrl } }) {
  return <SignIn callbackUrl={callbackUrl || "/"} />;
}
