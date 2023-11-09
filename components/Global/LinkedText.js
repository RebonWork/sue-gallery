import Link from "next/link"

const LinkedText = (props) => {
  return (
    <Link href={props.link}>{props.text}</Link>
  )
}

export default LinkedText