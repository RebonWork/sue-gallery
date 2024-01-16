import { TableCell } from "@/components/ui/table";
import EditCategoryForm from "./EditCategoryForm";
import { useState } from "react";
import CategoryActions from "./CategoryActions";
import { useMutation, useQueryClient } from "react-query";
import { deleteCategory } from "@/actions/serverActions";
import { useRouter } from "next/navigation";
import { updateCategory } from "@/actions/queries";
const CategoryItem = ({ category, id }) => {
  const [editable, setEditable] = useState(false);
  const queryClient = useQueryClient();
  const router = useRouter();
  const mutateDelete = useMutation(deleteCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries("category");
    },
  });
  const mutateUpdate = useMutation(updateCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries("category");
    },
  });
  async function handleCategoryDelete() {
    try {
      await mutateDelete.mutate(id);
      router.push("/dashboard/category");
    } catch (error) {
      console.log(error);
    }
  }
  async function handleCategoryUpdate(data) {
    try {
      await mutateUpdate.mutate({ data, id });
      router.push("/dashboard/category");
      await setEditable(false);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <TableCell className="font-medium text-center">
        {editable ? (
          <EditCategoryForm
            handelCategoryUpdate={handleCategoryUpdate}
            category={category}
          />
        ) : (
          category
        )}
      </TableCell>
      <TableCell className="text-right">
        <CategoryActions
          editable={editable}
          setEditable={setEditable}
          handleCategoryDelete={handleCategoryDelete}
          id={id}
        />
      </TableCell>
    </>
  );
};

export default CategoryItem;
