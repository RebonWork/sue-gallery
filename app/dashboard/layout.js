import Sidebar from "@/components/Dashboard/Sidebar";
import connectDB from "@/utils/database";

export default function Layout({ children }) {
  connectDB()
  return (
    <div className="dashboard-container">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
