import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useQueryClient, useMutation } from "react-query";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { deleteProduct } from "@/actions/queries";

const DeleteButton = ({_id}) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(deleteProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries("product");
    }
  })
  const router = useRouter();
  async function handledeleteProduct(id) {
    try {
      await mutation.mutate(id);
      router.push("/dashboard/products");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Trash2
          className="clickable delete"
        />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the product
            and remove its data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive" onClick={()=>deleteProduct(_id)}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteButton;
