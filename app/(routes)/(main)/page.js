"use client";
import { useQuery } from "react-query";
import FeaturedSection from "./_components/FeaturedSection";
import TrendingProductSection from "./_components/TrendingProductSection";
import { getProduct } from "@/actions/queries";
import CategorySection from "./_components/CategorySection";
import OurStorySection from "./_components/OurStorySection";
import CtaSection from "./_components/CtaSection";

export default function Home() {
  const { data, isFetched } = useQuery("product", getProduct);
  const activeData = data?.filter((product) => product.isActive === true);

  return <div>
    <FeaturedSection/>
    <TrendingProductSection data={activeData}/>
    <CategorySection/>
    <OurStorySection/>
    <CtaSection/>
  </div>;
}
