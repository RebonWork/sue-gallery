import { getCategory } from "@/actions/queries";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery } from "react-query";

const DropdownCategory = ({ defaultValue, onChange }) => {
  const { data, isFetched } = useQuery("category", getCategory);
  function handleData(categ) {
    return (
      <>
        <SelectItem key={categ._id} value={categ._id}>
          {categ.category}
        </SelectItem>
      </>
    );
  }

  return (
    <>
      <Select
        defaultValue={defaultValue}
        onValueChange={onChange}
        className="w-1/2 h-fit"
      >
        <SelectTrigger>
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent>{isFetched && data?.map(handleData)}</SelectContent>
      </Select>
    </>
  );
};

export default DropdownCategory;
