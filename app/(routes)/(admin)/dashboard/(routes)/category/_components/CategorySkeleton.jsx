import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "@/components/ui/table";

export function CategorySkeleton() {
  return (
    <TableRow>
      <TableCell className="w-44">
        <div className="h-full w-full flex justify-center items-center">
          <Skeleton className="h-4 w-32 " />
        </div>
      </TableCell>
      <TableCell className="flex flex-row gap-4 justify-end">
        <Skeleton className="h-10 w-10" />
        <Skeleton className="h-10 w-10" />
      </TableCell>
    </TableRow>
  );
}
