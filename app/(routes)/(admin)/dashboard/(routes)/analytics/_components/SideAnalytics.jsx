import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CategoryOverview from "./CategoryOverview";

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
          <div className="h-12 w-full">Product 1</div>
          <div className="h-12 w-full">Product 2</div>
          <div className="h-12 w-full">Product 3</div>
          <div className="h-12 w-full">Product 4</div>
          <div className="h-12 w-full">Product 5</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="text-sm font-medium">
          <CardTitle className="text-sm font-medium">
            Sales By Category
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CategoryOverview />
        </CardContent>
      </Card>
    </div>
  );
};

export default SideAnalytics;
