import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { cn } from "@/lib/utils";

function SingleOrder({
  imgSrc,
  title,
  category,
  totalSale,
  numberInstock,
  status,}) {
  return (
    <TableRow>
      <TableCell>
        <div className="w-14 h-14 flex justify-center items-center overflow-hidden rounded-xl">
          <Image
            src={imgSrc}
            alt="product"
            width={100}
            height={100}
            objectFit="cover"
          />
        </div>
      </TableCell>
      <TableCell className="font-medium">
        <div>
          <h1 className="text-medium font-bold">{title}</h1>
          <h2 className="text-xs text-neutral-500 ">{category}</h2>
        </div>
      </TableCell>
      <TableCell className="text-center">{totalSale}</TableCell>
      <TableCell className="text-center">{numberInstock}</TableCell>
      <TableCell className="text-center">
        <Badge className={cn(status === "In Stock" ? "bg-green-100 text-green-700 hover:bg-green-500/20" : "bg-red-100 text-red-700 hover:bg-red-500/30")} variant="default">{status}</Badge>
      </TableCell>
    </TableRow>
  );
}

const orders=[
    {
    imgSrc:"/product-01.jpg",
    title:"Elephent Library",
    category:"Tut Bag",
    orderId:"018db346-2258abdeda6e",
    totalSale:"$300",
    numberInstock:"12",
    status:"In Stock"
},
    {
    imgSrc:"/product-02.jpg",
    title:"Elephent Library",
    category:"Tut Bag",
    orderId:"018db346-2258abdeda6e",
    totalSale:"$300",
    numberInstock:"6",
    status:"In Stock"
},
    {
    imgSrc:"/product-03.jpg",
    title:"Elephent Library",
    category:"Tut Bag",
    orderId:"018db346-2258abdeda6e",
    totalSale:"$300",
    numberInstock:"0",
    status:"Out of Stock"
},
    {
    imgSrc:"/product-04.jpg",
    title:"Elephent Library",
    category:"Tut Bag",
    orderId:"018db346-2258abdeda6e",
    totalSale:"$300",
    numberInstock:"43",
    status:"In Stock"
},
    {
    imgSrc:"/product-05.jpg",
    title:"Elephent Library",
    category:"Tut Bag",
    orderId:"018db346-2258abdeda6e",
    totalSale:"$300",
    numberInstock:"12",
    status:"In Stock"
},
]

const TopProducts = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead className="w-72">Product Name</TableHead>
          <TableHead className="text-center">Total Revenue</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead className="text-center w-48">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order, index) => (
          <SingleOrder key={order.orderId} {...order} index={index} />
        ))}
      </TableBody>
    </Table>
  );
};

export default TopProducts;
