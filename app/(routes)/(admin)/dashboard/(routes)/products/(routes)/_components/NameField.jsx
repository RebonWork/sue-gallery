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

export function NameField(props) {
  return (
    <FormField
      control={props.control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Product Name</FormLabel>
          <FormControl>
            <Input placeholder="Product Name" {...field} />
          </FormControl>
          <FormDescription>Please Enter The Product Name.</FormDescription>
          <FormMessage />
        </FormItem>
      )} />
  );
}
