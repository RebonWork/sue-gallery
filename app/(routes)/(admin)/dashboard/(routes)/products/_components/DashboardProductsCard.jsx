import Image from "next/image";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

const DashboardProductsCard = (props) => {
  return (
    <>
      <h1>{props.id}</h1>

      <div className="product">
        <div className="image-container">
          <Image
            className="product-image"
            src={props.cover}
            width={100}
            height={100}
            alt="product image"
            priority={true}
          />
        </div>
        <h1>{props.name}</h1>
      </div>

      {props.categ? <h1>{props.categ}</h1> : <h1>No Category</h1>}
      <h1>{props.price} EGP</h1>
      <h1>{props.stock}</h1>

      <div className="icons">
        <EditIcon
          className="clickable edit"
          onClick={() => props.editProduct(props.id)}
        />
        <DeleteForeverIcon
          className="clickable delete"
          onClick={() => props.deleteProduct(props.id)}
        />
      </div>
    </>
  );
};

export default DashboardProductsCard;
