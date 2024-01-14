import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function PriceField(props) {
  return (
    <FormField
      control={props.control}
      name="price"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Product Price</FormLabel>
          <FormControl>
            <Input type="number" placeholder="Product Price" {...field} />
          </FormControl>
          <FormDescription>Please Enter The Product Price.</FormDescription>
          <FormMessage />
        </FormItem>
      )} />
  );
}
