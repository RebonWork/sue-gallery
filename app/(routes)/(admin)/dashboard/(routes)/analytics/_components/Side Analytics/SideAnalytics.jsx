import CategoryAnalytics from "./CategoryAnalytics";
import TopSellingProducts from "./TopSellingProducts";

const SideAnalytics = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <CategoryAnalytics/>
      <TopSellingProducts/>
    </div>
  );
};

export default SideAnalytics;
