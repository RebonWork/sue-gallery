import { getCategory } from "@/actions/serverActions";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React, { useEffect, useState } from "react";
import { v4 } from "uuid";

const DropdownCategory = ({ value, onChange}) => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    async function getCategoryData() {
      const data = await getCategory();
      const res = JSON.parse(data);
      setCategoryData(res);
    }
    getCategoryData();
    return () => {
      controller.abort();
    };
  }, []);
  function handleData(categ) {
    return (
      <>
        <SelectItem key={v4()} value={categ.category.toString()}>
          {categ.category}
        </SelectItem>
      </>
    );
  }

  return (
    <>
      <Select
        value={value}
        onValueChange={onChange}
      >
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
    </>
  );
};

export default DropdownCategory;
