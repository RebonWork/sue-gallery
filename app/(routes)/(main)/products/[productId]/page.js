"use client";
import { getProduct, getProductById } from "@/actions/queries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import { useQuery } from "react-query";
import ProductCarousel from "../../_components/ProductCarousel";
import { Badge } from "@/components/ui/badge";
import { productionBrowserSourceMaps } from "@/next.config";
const Page = ({ params: { productId } }) => {
  const { data: product, isFetched: isProductFetched } = useQuery(
    ["product", productId],
    () => getProductById(productId)
  );
  const { data, isFetched: isDataFetched } = useQuery("product", getProduct);

  const [quantity, setQuantity] = useState(1);
  const productImages = [product?.cover?.url];
  const [activeImage, setActiveImage] = useState(0);
  product?.images?.map((image) => {
    productImages.push(image.url);
  });

  return (
    <main>
      {isProductFetched ? (
        <>
          <section className=" flex flex-col lg:flex-row px-8 lg:px-32 mt-16">
            {/* product images */}
            <div className="flex basis-1/2 lg:gap-10">
              {/* product image */}
              <div className="hidden lg:flex flex-col gap-6">
                {productImages.map((image, index) => {
                  return (
                    <Image
                      key={image}
                      index={index}
                      src={image}
                      className="rounded-md"
                      width={150}
                      height={150}
                      alt={product.name}
                      onMouseEnter={() => setActiveImage(index)}
                    />
                  );
                })}
              </div>
              {/* active image */}
              <Image
                src={productImages[activeImage]}
                className="rounded-md"
                alt={product.name}
                width={600}
                height={600}
              />
            </div>
            {/* product details */}
            <div className="flex flex-col gap-4 mt-8 basis-1/2">
              <h1 className="max-md:text-3xl">{product.name}</h1>
              <h3>
                {product.price}
                <span className="px-2 text-neutral-400 text-lg">EGP</span>
              </h3>
              <span className="text-neutral-400 text-sm lg:text-medium px-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Morbi blandit cursus risus at ultrices mi tempus. Dictumst
                quisque sagittis purus sit amet. Libero enim sed faucibus turpis
                in eu.
              </span>
              <span className="text-neutral-400 text-sm lg:text-medium px-2">
                Pellentesque eu tincidunt tortor aliquam nulla facilisi cras
                fermentum. Integer eget aliquet nibh praesent tristique. Ut
                consequat semper viverra nam. Elit at imperdiet dui accumsan sit
                amet nulla. Sit amet est placerat in. Proin sagittis nisl
                rhoncus mattis rhoncus urna neque viverra. Odio pellentesque
                diam volutpat commodo.
              </span>
              <small>
                Stock status :{" "}
                {product.stock > 0 ? (
                  <Badge
                    className={
                      "bg-green-100 text-green-700 hover:bg-green-100/40"
                    }
                  >
                    In Stock
                  </Badge>
                ) : (
                  <Badge variant={"destructive"}>Out Of Stock</Badge>
                )}
              </small>
              {/* quantity counter and buy button */}
              <div className="flex w-full gap-8 mt-6">
                {/* quantity counter */}
                <div className="flex">
                  <Button
                    className="rounded-r-none bg-custom-primary-800"
                    disabled={product.stock < 1}
                    onClick={() =>
                      quantity > 1 ? setQuantity((prev) => prev - 1) : null
                    }
                  >
                    -
                  </Button>
                  <Input
                    type="number"
                    disabled={product.stock < 1}
                    onChange={(e) =>
                      e.target.value <= 30 &&
                      setQuantity(parseInt(e.target.value))
                    }
                    value={quantity}
                    className=" rounded-none text-center focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-12 "
                  />
                  <Button
                    className="rounded-l-none bg-custom-primary-800"
                    disabled={product.stock < 1}
                    onClick={() =>
                      quantity < 30
                        ? setQuantity((prev) => prev + 1)
                        : null
                    }
                  >
                    +
                  </Button>
                </div>
                <Button
                  disabled={product.stock < 1}
                  className="bg-custom-primary-800 flex-1"
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </section>
          <section className="px-8 lg:px-32 mt-24">
            <h2 className="max-md:text-2xl">Similar Products</h2>
            <ProductCarousel data={data} />
          </section>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
};

export default Page;
