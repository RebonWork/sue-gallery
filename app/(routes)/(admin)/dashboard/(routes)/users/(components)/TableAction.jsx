import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import Link from "next/link";

const TableAction = ({userId}) => {
  return (
    <Button variant="ghost" size="icon">
      <Link href={`/dashboard/users/${userId}`} >
        <Pencil />
      </Link>
    </Button>
  );
};

export default TableAction;
