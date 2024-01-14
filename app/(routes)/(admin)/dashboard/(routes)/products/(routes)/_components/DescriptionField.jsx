import React from "react";
import Editor from "./Editor/Editor";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

export function DescriptionField(props) {
  return (
    <FormField
      control={props.control}
      name="description"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Product Description</FormLabel>
          <FormControl>
            <Editor
              isSubmitSuccessful={props.isSubmitSuccessful}
              description={field.value}
              onChange={field.onChange} />
          </FormControl>
          <FormDescription>
            Please Enter The Product Description.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )} />
  );
}
