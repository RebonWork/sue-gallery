import SignIn from "@/app/(routes)/(auth)/_component/SignIn";

export default function Page({ searchParams: { callbackUrl } }) {
  return <SignIn callbackUrl={callbackUrl} />;
}
