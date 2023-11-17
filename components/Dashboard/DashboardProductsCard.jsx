import Image from "next/image";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import React from "react";

const DashboardProductsCard = (props) => {
  return (
    <div className="dashboard-product">
      <div className="dashboard-image-container">
        <Image
          className="dashboard-product-image"
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
        <DeleteForeverIcon className="click-icon" onClick={()=>props.deleteProduct(props.id)}/>
        <EditIcon className="click-icon" onClick={()=>props.editProduct(props.id)}/>
      </div>
    </div>
  );
};

export default DashboardProductsCard;
