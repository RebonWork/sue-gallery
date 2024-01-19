"use client";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormMessage,
  FormItem,
  FormControl,
  FormField,
  FormDescription,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { SubmitFormButton } from "../../products/(routes)/_components/SubmitFormButton";
import { useMutation, useQueryClient } from "react-query";
import { addCategory } from "@/actions/queries";
import { useEffect } from "react";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

export function AddNewCategoryForm() {
  const router = useRouter();
  const mutation = useMutation(addCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries("category");
    },
  });
  const schema = z.object({
    category: z.string().min(2, { message: "Required" }),
  });
  
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      category: "",
    }
  });
  const {
    reset,
    formState: { isSubmitSuccessful },
  } = form;
  const queryClient = useQueryClient();

  async function HandleSubmit(data) {
    await mutation.mutate(data);
    router.push("/dashboard/category")
  }
  useEffect(() => {
    reset();
  }, [isSubmitSuccessful,reset]);
  return (
    <div className="mt-6">
      <h1 className="text-3xl font-black block">Add New Category</h1>
      <Form {...form}>
        <form
          className="flex items-center gap-6 mt-4 pl-2"
          onSubmit={form.handleSubmit(HandleSubmit)}
        >
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormControl className>
                  <Input placeholder="eg, (Tut Bag)" {...field} />
                </FormControl>
                <FormDescription>Please Enter The Category.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <SubmitFormButton isSubmitting={form.formState.isSubmitting}>Add New Category</SubmitFormButton>
        </form>
      </Form>
    </div>
  );
}
