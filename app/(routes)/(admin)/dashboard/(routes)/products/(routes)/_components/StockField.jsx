import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function StockField(props) {
  return (
    <FormField
      control={props.control}
      name="stock"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Product Stock</FormLabel>
          <FormControl>
            <Input type="number" placeholder="Product Stock" {...field} />
          </FormControl>
          <FormDescription>Please Enter The Product Stock.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
