import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ProfileSidebarRoutes from "./ProfileSidebarRoutes";
import { Menu } from "lucide-react";
const ProfileMobileSidebar = () => {
  return (
      <div className="p-4 border-b h-full flex items-center bg-white">
        <div>
          <Sheet>
            <SheetTrigger className="md:hidden pr-4 opacity-75 transition">
              <Menu />
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col p-0 gap-0 bg-white w-full">
              <ProfileSidebarRoutes />
            </SheetContent>
          </Sheet>
        </div>
      </div>
  );
};

export default ProfileMobileSidebar;
