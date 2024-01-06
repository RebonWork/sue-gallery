import { getCategory } from "@/actions/serverActions";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React, { useEffect, useState } from "react";
import { v4 } from "uuid";

const DropdownCategory = ({setCategory}) => {
  const [categoryData, setCategoryData] = useState([]);

useEffect(()=> async ()=>{
    const res = JSON.parse(await getCategory())
    setCategoryData(res)
},[])
  function handleData(categ){
    return(<SelectItem key={v4()} value={categ.category}>{categ.category}</SelectItem>)
  }

  return (
    <Select onValueChange={(value)=>setCategory(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="null">None</SelectItem>
          {categoryData.map(handleData)}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default DropdownCategory;
