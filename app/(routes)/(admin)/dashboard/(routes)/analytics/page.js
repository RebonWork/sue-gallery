import RecentOrders from "./_components/RecentOrders";
import SideAnalytics from "./_components/SideAnalytics";
import TopAnalytics from "./_components/TopAnalytics";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WeekOverview } from "./_components/WeekOverview";

const Page = () => {
  return (
    <div className="flex flex-row gap-6 m-6">
      <div className="flex flex-col gap-6 w-full">
        <TopAnalytics />
        <Card>
          <CardHeader className="text-sm font-medium">
            The Weeks Revenue
          </CardHeader>
          <CardContent>
            <WeekOverview />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentOrders />
          </CardContent>
        </Card>
      </div>
      <div>
        <SideAnalytics />
      </div>
    </div>
  );
};

export default Page;
