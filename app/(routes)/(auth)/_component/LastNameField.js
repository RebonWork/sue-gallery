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

export function LastNameField(props) {
  return (
    <FormField
      control={props.control}
      name="lastName"
      render={({ field }) => (
        <FormItem className="flex-auto">
          <FormLabel>Last Name</FormLabel>
          <FormControl>
            <Input placeholder="Last Name" {...field} />
          </FormControl>
          <FormDescription>Please Enter Your Last Name</FormDescription>
          <FormMessage />
        </FormItem>
      )} />
  );
}
