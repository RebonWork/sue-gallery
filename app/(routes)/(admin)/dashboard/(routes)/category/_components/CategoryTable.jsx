import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CategoryItem from "./CategoryItem";

const CategoryTable = ({ data }) => {

  return (
    <Table className="w-full">
      <TableCaption>A list of your product categories.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-44 text-center">Category</TableHead>
          <TableHead className="text-right"><div className="mr-5">Actions</div></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((category) => (
          <TableRow key={category._id}>
            <CategoryItem category={category.category} id={category._id}/>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CategoryTable;
