import Sidebar from "./_components/Sidebar";
import connectDB from "@/utils/database";

export default function Layout({ children }) {
  connectDB()
  return (
    <div className="dashboard-container">
      <Sidebar />
      {children}
    </div>
  );
}
