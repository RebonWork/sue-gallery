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
  orderId,
  price,
  quantity,
  status,
}) {
  return (
    <TableRow>
      <TableCell>
        <div className="w-16 h-16 flex justify-center items-center overflow-hidden rounded-xl">
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
      <TableCell>{orderId}</TableCell>
      <TableCell className="text-center">{price}</TableCell>
      <TableCell className="text-center">{quantity}</TableCell>
      <TableCell className="text-center">
        <Badge
          className={cn(
            status === "Placed" && "bg-gray-100 text-gray-700 hover:bg-gray-100/40",
            status === "Processing" && "bg-orange-100 text-orange-700 hover:bg-orange-100/40",
            status === "Shipped" && "bg-blue-100 text-blue-700 hover:bg-blue-100/40",
            status === "Delivered" && "bg-lime-100 text-lime-700 hover:bg-lime-100/40",
            status === "Cancelled" && "bg-red-100 text-red-700 hover:bg-red-100/40",
            status === "Completed" && "	bg-green-100 text-green-700 hover:bg-green-100/40"
          )}
          variant="default"
        >
          {status}
        </Badge>
      </TableCell>
    </TableRow>
  );
}

const RecentOrders = () => {
  const orders = [
    {
      imgSrc: "/product-01.jpg",
      title: "Elephent Library",
      category: "Tut Bag",
      orderId: "018db346-2258abdeda6e",
      price: "$300",
      quantity: "2",
      status: "Placed",
    },
    {
      imgSrc: "/product-02.jpg",
      title: "Elephent Library",
      category: "Tut Bag",
      orderId: "018db346-2258abdeda6e",
      price: "$300",
      quantity: "2",
      status: "Processing",
    },
    {
      imgSrc: "/product-03.jpg",
      title: "Elephent Library",
      category: "Tut Bag",
      orderId: "018db346-2258abdeda6e",
      price: "$300",
      quantity: "2",
      status: "Shipped",
    },
    {
      imgSrc: "/product-04.jpg",
      title: "Elephent Library",
      category: "Tut Bag",
      orderId: "018db346-2258abdeda6e",
      price: "$300",
      quantity: "2",
      status: "Delivered",
    },
    {
      imgSrc: "/product-05.jpg",
      title: "Elephent Library",
      category: "Tut Bag",
      orderId: "018db346-2258abdeda6e",
      price: "$300",
      quantity: "2",
      status: "Completed",
    },
  ];
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]"></TableHead>
          <TableHead className="w-96">Product Name</TableHead>
          <TableHead>Invoice</TableHead>
          <TableHead className="text-center">Price</TableHead>
          <TableHead className="text-center">Amount</TableHead>
          <TableHead className="text-center">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <SingleOrder key={order.orderId} {...order} />
        ))}
      </TableBody>
    </Table>
  );
};

export default RecentOrders;
