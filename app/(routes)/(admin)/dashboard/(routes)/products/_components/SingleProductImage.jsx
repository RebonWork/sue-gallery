import { DeleteForever } from '@mui/icons-material'
import Image from 'next/image'

const SingleProductImage = (props) => {
  return (
    <>
    <Image
      className="dashboard-product-image"
      src={props.imageUrl}
      width={500}
      height={500}
      alt="product image"
    />
    <DeleteForever onClick={()=> props.handleImageDelete(props.id)} className="clickable" />
  </>
  )
}

export default SingleProductImage