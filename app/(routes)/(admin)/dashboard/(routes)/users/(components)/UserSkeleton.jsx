import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "@/components/ui/table";

export function UserSkeleton() {
    return (
        <TableRow className="h-20">
            <TableCell className="font-medium">
                <Skeleton className="h-4 w-32" />
            </TableCell>
            <TableCell>
                <Skeleton className="h-4 w-48" />
            </TableCell>
            <TableCell>
                <Skeleton className="h-6 w-16" />
            </TableCell>
            <TableCell className="flex justify-center">
                <Skeleton className="h-10 w-10" />
            </TableCell>
        </TableRow>
    );
}
