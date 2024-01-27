import SmallSquareAnalytics from "./SmallSquareAnalytics";

const TopAnalytics = () => {
    return ( 
        <div className="flex flex-row gap-6">
            <SmallSquareAnalytics value="4000$">Today&apos;s Revenue</SmallSquareAnalytics>
            <SmallSquareAnalytics value="30 Orders">Orders This Month</SmallSquareAnalytics>
            <SmallSquareAnalytics value="4590 Visits">This Month Website Visits</SmallSquareAnalytics>
            <SmallSquareAnalytics value="50000$">Total Revenue</SmallSquareAnalytics>
        </div>
     );
}
 
export default TopAnalytics ;