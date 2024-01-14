import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import DropdownCategory from "./DropdownCategory";

export function CategoryField(props) {
  return (
    <FormField
      control={props.control}
      name="category"
      render={({ field: { value, onChange } }) => (
        <FormItem>
          <FormLabel>Product Category</FormLabel>
          <FormControl>
            <DropdownCategory value={value} onChange={onChange} />
          </FormControl>
          <FormDescription>Please Enter The Product Category.</FormDescription>
          <FormMessage />
        </FormItem>
      )} />
  );
}
