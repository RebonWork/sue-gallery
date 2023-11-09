'use client'
 import {useFormStatus } from 'react-dom'

const Button = ({value,...props}) => {
    const { pending } = useFormStatus();
  return (
    <button{...props} disabled={pending}>{ pending ? 'Loading...' : value}</button>
  )
}

export default Button