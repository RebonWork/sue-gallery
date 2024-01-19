import SidebarItem from "@/app/(routes)/(admin)/dashboard/_components/SidebarItem";
import { User2 } from "lucide-react";

const ProfileSidebarRoutes = () => {
  const routes = [
    {
      label: "Profile",
      Icon: User2,
      href: "/account/manage",
    },
    {
      label: "Security",
      Icon: User2,
      href: "/account/manage/security",
    }
  ];
  return routes.map((route) => (
    <SidebarItem
      key={route.href}
      label={route.label}
      href={route.href}
      Icon={route.Icon}
    />
  ));
};

export default ProfileSidebarRoutes;
