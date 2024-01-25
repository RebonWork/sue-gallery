import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "@/components/ui/table";

const ProductTableSkeleton = () => {
  return (
    <div className="flex flex-row">
      <div><Skeleton className="h-4 mt-1 w-24" /></div>
      <div><Skeleton className="h-4 mt-1 w-24" /></div>
      <div><Skeleton className="h-4 mt-1 w-24" /></div>
      <div><Skeleton className="h-4 mt-1 w-24" /></div>
      <div><Skeleton className="h-4 mt-1 w-24" /></div>
      <div><Skeleton className="h-4 mt-1 w-24" /></div>
      <div><Skeleton className="h-4 mt-1 w-24" /></div>
    </div>
  );
};

export default ProductTableSkeleton;
