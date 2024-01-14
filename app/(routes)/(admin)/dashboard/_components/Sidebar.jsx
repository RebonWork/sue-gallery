"use client";

import Logo from "@/components/Global/Logo";
import SidebarRoutes from "./SidebarRoutes";

const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="bg-pink-200 flex justify-center items-center p-3">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
