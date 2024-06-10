import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";


const EditCategoryForm = ({ category, handelCategoryUpdate }) => {
  const schema = z.object({
    category: z.string().min(2, { message: "Required" }),
  });

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      category: category,
    },
  });
  return (
<Form {...form}>
      <form
        id="edit-category"
        onSubmit={form.handleSubmit(handelCategoryUpdate)}
      >
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <h1 className="text-xs font-medium">Category Name</h1>
              </FormLabel>
              <FormControl>
                <Input placeholder="eg, (Tut Bag)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default EditCategoryForm;
