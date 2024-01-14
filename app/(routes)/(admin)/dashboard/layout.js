import Sidebar from "./_components/Sidebar";
import connectDB from "@/utils/database";
import { Toaster } from "@/components/ui/toaster";

export default function Layout({ children }) {
  connectDB();
  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <div className=" pl-64">{children}</div>
      <Toaster />
    </div>
  );
}
