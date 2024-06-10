import {useQuery} from "react-query";
import {getCategory} from "@/actions/queries";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

const CategoryList = ({activeFilter,setActiveFilter}) => {
    const { data , isFetched } = useQuery("category", getCategory);

    const categories = isFetched ? data : [];
    return ( <div className="w-64 flex flex-col gap-6 mt-8 px-3">
        {categories?.map((category) => (
            <Button
                onClick={() =>  setActiveFilter( activeFilter === category._id ? null : category._id)}
                className={cn("bg-pink-300 hover:bg-pink-400", category._id===activeFilter && "bg-pink-400" )} key={category._id}>
                {category.category}
            </Button>
        ))}
        <Button variant={"ghost"} onClick={() =>  setActiveFilter( null )}>
            Clear Filters
        </Button>
    </div> );
}
 
export default CategoryList;