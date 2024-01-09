import { Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
const EditButton = ({_id}) => {
  const router = useRouter();
  function editProduct(id) {
    router.push(`/dashboard/products/${id}`);
  }
  return (
    <Pencil
      className="clickable edit"
      onClick={() => editProduct(_id)}
    />
  );
};

export default EditButton;
