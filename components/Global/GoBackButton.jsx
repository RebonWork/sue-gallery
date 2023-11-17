import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';

const GoBackButton = (props) => {
    const router = useRouter()
  return (
    <ArrowBackIcon className='click-icon' onClick={()=>router.push(props.page)}/>
  )
}

export default GoBackButton