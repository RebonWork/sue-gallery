import Image from "next/image";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

const DashboardProductsCard = (props) => {
  return (
    <div className="dashboard-product">
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
      <div>
        <h1>{props.name}</h1>
        <h1>{props.desc}</h1>
        <h1>{props.price}</h1>
      </div>
      <div>
        <DeleteForeverIcon
          className="clickable"
          onClick={() => props.deleteProduct(props.id)}
        />
        <EditIcon
          className="clickable"
          onClick={() => props.editProduct(props.id)}
        />
      </div>
    </div>
  );
};

export default DashboardProductsCard;
