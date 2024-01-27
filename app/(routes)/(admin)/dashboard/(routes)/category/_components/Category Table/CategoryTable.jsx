import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CategoryItem from "./CategoryItem";
import CategoryTableSkeleton from "../Category Skelaton/CategoryTableSkeleton";

const CategoryTable = ({ data , isFetched }) => {

  return (
    <Table className="w-full">
      <TableCaption>A list of your product categories.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-44 text-left">Category</TableHead>
          <TableHead className="text-right"><div className="mr-5">Actions</div></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {isFetched? data?.map((category) => (
          <TableRow key={category._id}>
            <CategoryItem category={category.category} id={category._id}/>
          </TableRow>
        )): <CategoryTableSkeleton/>}
      </TableBody>
    </Table>
  );
};

export default CategoryTable;
