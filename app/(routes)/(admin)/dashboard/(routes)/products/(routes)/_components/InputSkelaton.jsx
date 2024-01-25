import { Skeleton } from "@/components/ui/skeleton";

export function InputSkelaton() {
    return (
        <div className="flex flex-col gap-2">
            <Skeleton className="h-4 mt-1 w-24" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-3 mt-1 w-56" />
        </div>
    );
}
