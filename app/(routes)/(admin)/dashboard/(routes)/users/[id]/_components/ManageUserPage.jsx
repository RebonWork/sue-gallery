import {
  Form,
  FormLabel,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import RoleDropdown from "./RoleDropdown";
import { SubmitFormButton } from "../../../products/(routes)/_components/SubmitFormButton";
import { usePathname, useRouter } from "next/navigation";
import { deleteUserById, updateUserById } from "@/actions/queries";
import { useMutation, useQueryClient } from "react-query";
import DeleteById from "../../_components/DeleteById";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { SelectSeparator } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
const ManageUserPage = ({ data }) => {
  const router = useRouter();
  const pathname = usePathname();
  const queryClient = useQueryClient();
  const userFormSchema = z.object({
    firstName: z.string().min(1, { message: "Required" }),
    lastName: z.string().min(1, { message: "Required" }),
    email: z.string().min(1, { message: "Required" }),
    role: z.string().min(1, { message: "Required" }),
    // status: z.string().min(1, { message: "Required" }),
  });
  const { toast } = useToast();
  const form = useForm(
    {
      defaultValues: {
        firstName: data?.firstName,
        lastName: data?.lastName,
        email: data?.email,
        role: data?.role,
      },
    },
    {
      resolver: zodResolver(userFormSchema),
    }
  );
  const {
    formState: { isSubmitting },
  } = form;
  const isDashboard = pathname?.startsWith("/dashboard/users");
  const mutateUpdateUser = useMutation(updateUserById, {
    onSuccess: () => {
      queryClient.invalidateQueries("user");
    },
  });
  const mutateDeleteUser = useMutation(deleteUserById, {
    onSuccess: () => {
      queryClient.invalidateQueries("user");
    },
  });
  async function handleUpdate(user) {
    try {
      mutateUpdateUser.mutate({
        userId: data._id,
        user: user,
      });
      toast({
        description: "User updated successfully",
        variant: "success",
      });
    } catch (error) {
      toast({
        description: "Something went wrong, please try again",
        variant: "destructive",
      });
    }
  }
  async function handleDelete() {
    try {
      mutateDeleteUser.mutate({
        userId: data._id,
      });
      router.push("/dashboard/users");
      console.log("delete");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex flex-col gap-8 px-16">
      <div className="mt-6 h-32 flex justify-start items-center">
        <Avatar className="w-24 h-24">
          <AvatarImage
            className="object-cover"
            src={data?.image}
            alt="Avatar"
          />
        </Avatar>
      </div>
      <div className="flex w-[600px] flex-col gap-4">
        <h1 className="text-3xl font-bold">User Info</h1>
        <SelectSeparator />
        <Form {...form}>
          <form
            className="pl-6 flex flex-col gap-4 justify-center"
            onSubmit={form.handleSubmit(handleUpdate)}
          >
            <div className="flex flex-row gap-4 w-full">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="First Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Last Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <RoleDropdown
                      onChange={field.onChange}
                      value={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => <h1>{field.value}</h1>}
            />
            <div className="flex flex-row gap-7">
              <DeleteById onClickDelete={handleDelete} />
              <SubmitFormButton isSubmitting={isSubmitting}>
                Update User
              </SubmitFormButton>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ManageUserPage;
