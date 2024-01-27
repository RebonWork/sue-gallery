import Sidebar from "./_components/Admin Sidebar/Sidebar";
import connectDB from "@/utils/database";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "./_components/Admin Navbar/Navbar";

export default function Layout({ children }) {
  connectDB();
  return (
    <div className="h-full bg-pink-50/30">
      <div className="h-[80px] w-full inset-x-0 fixed z-50">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-60 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <div className=" md:pl-60 pt-[80px]">{children}</div>
      <Toaster />
    </div>
  );
}
