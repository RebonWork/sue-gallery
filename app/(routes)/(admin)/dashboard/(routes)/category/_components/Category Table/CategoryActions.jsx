import { Button } from "@/components/ui/button";
import { Pencil, Trash2Icon, XCircle } from "lucide-react";

const CategoryActions = ({ handleCategoryDelete, setEditable, editable}) => {
  
  return (
    <div className="flex gap-2 justify-end">
      {editable && <Button variant="ghost" type="submit" form="edit-category">Save</Button>}
      {!editable ? (
        <Button size="icon" onClick={() => setEditable(true)}>
          <Pencil />
        </Button>
      ) : (
        <Button size="icon" onClick={() => setEditable(false)}>
          <XCircle />
        </Button>
      )}
      <Button size="icon" onClick={handleCategoryDelete}>
        <Trash2Icon />
      </Button>
    </div>
  );
};

export default CategoryActions;
