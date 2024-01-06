"use client";
import { addNewCategory } from "@/actions/serverActions";

import { useState } from "react";
import CategoryList from "./_components/CategoryList";
import { v4 } from "uuid";

export default function Page() {
  const [addcategory, setAddCategory] = useState("");


  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    addNewCategory(addcategory);
    console.log("added");
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="category">Add New</label>
        <input
          onKeyDown={handleKeyDown}
          onChange={(e) => setAddCategory(e.target.value)}
          id="category"
          value={addcategory}
        />
        <button type="submit">+</button>
      </form>
      <CategoryList key={v4()}/>

    </div>
  );
}
