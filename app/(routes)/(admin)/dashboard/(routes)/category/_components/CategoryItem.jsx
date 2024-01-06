import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
const CategoryItem = ({name,id,deleteItem}) => {
  return (
    <div className="category">
      <h1 key={id}>{name}</h1>
      <DeleteForeverIcon className="clickable" onClick={()=>{deleteItem(id)}} />
    </div>
  );
};

export default CategoryItem;
