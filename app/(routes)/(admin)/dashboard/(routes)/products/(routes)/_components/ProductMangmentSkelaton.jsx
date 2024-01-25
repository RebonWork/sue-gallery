import { Skeleton } from "@/components/ui/skeleton";
import { InputSkelaton } from "./InputSkelaton";

const ProductMangmentSkelaton = () => {
  return (
    <div className="flex flex-row gap-16">
      <div className="flex flex-row gap-12">
        <div className="flex flex-col gap-3 w-32">
          <Skeleton className="h-6 mt-1 w-24" />
          <div className="flex flex-col gap-0.5">
            <Skeleton className="w-32 h-32 rounded-md mt-3" />
            <Skeleton className="w-32 h-8 rounded-md mt-3" />
          </div>
          <div className="flex flex-col gap-0.5">
            <Skeleton className="w-32 h-32 rounded-md mt-3" />
            <Skeleton className="w-32 h-8 rounded-md mt-3" />
          </div>
          <div className="flex flex-col gap-0.5">
            <Skeleton className="w-32 h-32 rounded-md mt-3" />
            <Skeleton className="w-32 h-8 rounded-md mt-3" />
          </div>
          <div className="flex flex-col gap-0.5">
            <Skeleton className="w-32 h-32 rounded-md mt-3" />
          </div>
        </div>
        <div className="w-72">
          <Skeleton className="h-6 mt-1 w-36" />
          <Skeleton className="w-72 h-72 rounded-md mt-3" />
        </div>
      </div>
      <div className=" flex flex-col gap-6 w-[500px]">
        <InputSkelaton/>
        <InputSkelaton/>
        <InputSkelaton/>


        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 mt-1 w-24" />
          <Skeleton className="h-12 w-48" />
          <Skeleton className="h-3 mt-1 w-56" />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 mt-1 w-24" />
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-3 mt-1 w-56" />
        </div>
        <Skeleton className="h-12 w-30" />
      </div>
    </div>
  );
};

export default ProductMangmentSkelaton;
