"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "../products/_components/ProductCard";
const ProductCarousel = ({ data }) => {
  return (
    <div className=" px-16 mt-4">
      <Carousel className="w-full">
        <CarouselContent className="w-full ml-1">
          {data?.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/5"
            >
              <ProductCard
                imageUrl={item.cover.url}
                name={item.name}
                price={item.price}
                id={item._id}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
