import RecentOrders from "./_components/RecentOrders";
import RevenueChart from "./_components/RevenueChart";
import SideAnalytics from "./_components/Side Analytics/SideAnalytics";
import TopAnalytics from "./_components/Top Analytics/TopAnalytics";


const Page = () => {
  return (
    <div className="flex flex-row gap-6 m-6">
      <div className="flex flex-col gap-6">
        <TopAnalytics />
        <RevenueChart />
        <RecentOrders />
      </div>
      <SideAnalytics />
    </div>
  );
};

export default Page;
