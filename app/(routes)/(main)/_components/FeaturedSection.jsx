import { Button } from "@/components/ui/button";
import Image from "next/image";

const FeaturedSection = () => {
  return (
    <div className="flex justify-between items-center bg-custom-accent-800 px-16 py-12 ">
      <div className="text-white flex flex-col">
        <h1>This Amazing Tut Bag</h1>
        <h5>A great gift for your loved ones</h5>
        <Button className="mt-8 bg-custom-primary-800">Shop Now</Button>
      </div>
      <Image
        src="/FeaturedPicture.png"
        alt="featured image"
        width={600}
        height={600}
      />
    </div>
  );
};

export default FeaturedSection;
