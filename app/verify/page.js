import { verifyWithCredentials } from "@/actions/authActions"


const verifyPage = async ({searchParams:{token}}) => {
    const res = await verifyWithCredentials(token)
  return (
    <h1>{res?.msg}</h1>
  )
}

export default verifyPage