import { deleteCategory, getCategory } from "@/actions/serverActions";

import React, { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  const [categories, setCategory] = useState([]);
  useEffect(
    () => async () => {
      try {
        const res = JSON.parse(await getCategory());
        setCategory(res);
      } catch (error) {
        console.log(error);
      }
    },
    []
  );
  function deleteItem(id){
    deleteCategory(id)
  }
  function handelCatgData(catg) {
    return (
      <CategoryItem name={catg.category} id={catg._id} deleteItem={deleteItem}/>
    );
  }

  return <div> {categories.map(handelCatgData)}</div>;
};

export default CategoryList;
