import Image from "next/image";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Trash2 } from 'lucide-react';
import { Pencil } from 'lucide-react';
import DeleteButton from "./DeleteButton";

const DashboardProductsCard = (props) => {
  return (
    <div className="card-container">
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
        <Pencil
          className="clickable edit"
          onClick={() => props.editProduct(props.id)}
        />

        <DeleteButton deleteProduct={() => props.deleteProduct(props.id)}/>
      </div>
    </div>
  );
};

export default DashboardProductsCard;
