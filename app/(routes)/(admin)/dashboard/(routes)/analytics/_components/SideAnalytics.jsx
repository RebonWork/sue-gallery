import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CategoryOverview from "./CategoryOverview";
import TopProducts from "./TopProduct";

const SideAnalytics = () => {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader className="text-sm font-medium">
          <CardTitle className="text-sm font-medium">
            Top Selling Products
          </CardTitle>
        </CardHeader>
        <CardContent>
          <TopProducts />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="text-sm font-medium">
          <CardTitle className="text-sm font-medium">
            Sales By Category
          </CardTitle>
        </CardHeader>
        <CardContent className="w-full flex justify-center">
          <CategoryOverview />
        </CardContent>
      </Card>
    </div>
  );
};

export default SideAnalytics;
