"use client";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormDescription,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";

export function ConfirmPasswordField(props) {
  const [isVisiable, setIsVisiable] = useState(false);
  return (
    <FormField
      control={props.control}
      name="confirmPassword"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Confirm Password</FormLabel>
          <FormControl>
            <div className="flex flex-row gap-3 items-center">
              <Input
                type={isVisiable ? "text" : "password"}
                placeholder="Password"
                {...field}
              />
              {isVisiable ? (
                <EyeOffIcon
                  className="select-none"
                  onClick={() => setIsVisiable(false)}
                />
              ) : (
                <EyeIcon
                  className="select-none"
                  onClick={() => setIsVisiable(true)}
                />
              )}
            </div>
          </FormControl>
          <FormDescription>Please Enter Your Confirm Password</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
