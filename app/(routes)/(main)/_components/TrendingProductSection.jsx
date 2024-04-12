import ProductCarousel from "./ProductCarousel";

const TrendingProductSection = ({data}) => {

  return (
    <div className="px-16 py-20">
      <h2>Trending Products</h2>
      {data? <ProductCarousel data={data}/> : "Loading..."}
    </div>
  );
};

export default TrendingProductSection;
