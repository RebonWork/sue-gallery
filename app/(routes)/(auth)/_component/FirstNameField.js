"use client";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormDescription,
  FormLabel
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function FirstNameField(props) {
  return (
    <FormField
      control={props.control}
      name="firstName"
      render={({ field }) => (
        <FormItem className="flex-auto">
          <FormLabel>First Name</FormLabel>
          <FormControl>
            <Input placeholder="First Name" {...field} />
          </FormControl>
          <FormDescription>Please Enter Your First Name</FormDescription>
          <FormMessage />
        </FormItem>
      )} />
  );
}
