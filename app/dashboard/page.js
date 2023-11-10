import SignOut from '@/components/Auth/SignOut'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <Link href={"/dashboard/products"}>Products</Link>
      <SignOut/>
    </>

  )
}

export default page