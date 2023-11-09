"use client"

import { useRouter ,useSearchParams } from "next/navigation"

const Errors = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const errMsg = searchParams.get('error')
    console.log(errMsg);
  return (
    <div>
        <h1>Error: {errMsg}</h1>
        <button onClick={()=> router.back()}>Try Again</button>
    </div>
  )
}

export default Errors