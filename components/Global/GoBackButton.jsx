import React from 'react'
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const GoBackButton = (props) => {
    const router = useRouter()
  return (
    <ArrowLeft  className='clickable w-8 h-8' onClick={()=>router.push(props.page)}/>
  )
}

export default GoBackButton