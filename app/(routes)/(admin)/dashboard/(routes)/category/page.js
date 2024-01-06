"use client";
import { addNewCategory } from "@/actions/serverActions";

import { useRef, useState } from "react";
import CategoryList from "./_components/CategoryList";
import { v4 } from "uuid";

export default function Page() {
  const addCategoryRef = useRef("")


  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    addNewCategory(addCategoryRef.current);
    console.log("added");
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="category">Add New</label>
        <input
          onKeyDown={handleKeyDown}
          onChange={(e) => addCategoryRef.current = e.target.value}
          id="category"
        />
        <button type="submit">+</button>
      </form>
      <CategoryList key={v4()}/>

    </div>
  );
}
