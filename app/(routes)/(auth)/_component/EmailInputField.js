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

export function EmailInputField(props) {
  return (
    <FormField
      control={props.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input type="email" placeholder="Email" {...field} />
          </FormControl>
          <FormDescription>Please Enter Your Email</FormDescription>
          <FormMessage />
        </FormItem>
      )} />
  );
}
