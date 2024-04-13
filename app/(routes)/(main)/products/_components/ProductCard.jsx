"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ imageUrl, name, price, rating, id}) => {

  return (
    <Link href={`/products/${id}`} className="flex flex-col overflow-hidden p-2">
      <div className="overflow-hidden object-center rounded-sm w-[300px] h-[300px] ">
        <Image
          src={imageUrl}
          height={300}
          width={300}
          alt={"Product " + name + " Photo"}
        />
      </div>
      <div className="mt-5 flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <Badge className={"w-fit"} color="secondary">
            New
          </Badge>
          <span>{name}</span>
          <small className="text-neutral-400">
            A great gift for your loved ones
          </small>
        </div>
        <div className="flex justify-between items-center">
          <div className="tracking-tighter space-x-1">
            <h4 className="inline">{price}</h4>
            <span>EGP</span>
          </div>
          <Button>
            <ShoppingCart size={20} className="mr-2" /> Add To Cart
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
