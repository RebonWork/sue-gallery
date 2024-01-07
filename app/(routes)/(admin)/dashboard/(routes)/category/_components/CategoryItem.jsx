import React, { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from '@mui/icons-material/Cancel';
import { updatedCategory } from "@/actions/serverActions";
const CategoryItem = ({ category, id, deleteItem }) => {
  const [ediable, setEditable] = useState(false);
  const [currentCategory , setCurrentCategory] = useState(category)
  const [categoryUpdate, setCategoryUpdate] = useState(category)

  async function handleCategoryUpdate(){
    await updatedCategory({id, categoryUpdate, currentCategory})
    setCurrentCategory(categoryUpdate);
    setEditable(false)
    console.log("Category Updated");
  }
  return (
    <div className="category">
      {ediable ? (
        <div>
          <input onChange={(e)=>setCategoryUpdate(e.target.value)} value={categoryUpdate} />
          <CancelIcon className="clickable" onClick={()=>setEditable(false)}/>
          <button onClick={handleCategoryUpdate}>Save</button>
        </div>
      ) : (
        <h1 key={id}>{currentCategory}</h1>
      )}
      <DeleteForeverIcon
        className="clickable"
        onClick={() => {
          deleteItem(id);
        }}
      />
      <EditIcon className="clickable" onClick={() => setEditable(true)} />
    </div>
  );
};

export default CategoryItem;
