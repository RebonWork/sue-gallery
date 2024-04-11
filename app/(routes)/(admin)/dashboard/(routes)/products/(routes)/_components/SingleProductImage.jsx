
import Image from 'next/image'

const SingleProductImage = (props) => {
  return (
    <>
    <div></div>
    <Image
      className="dashboard-product-image"
      src={props.imageUrl}
      width={500}
      height={500}
      alt="product image"
    />

  </>
  )
}

export default SingleProductImage