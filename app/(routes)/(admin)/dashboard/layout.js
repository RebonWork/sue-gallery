import Sidebar from "./_components/Sidebar";
import connectDB from "@/utils/database";
import { Toaster } from "@/components/ui/toaster"

export default function Layout({ children }) {
  connectDB()
  return (
    <div className="dashboard-container">
      <Sidebar />
      <main>{children}</main>
      <Toaster />
    </div>
  );
}
