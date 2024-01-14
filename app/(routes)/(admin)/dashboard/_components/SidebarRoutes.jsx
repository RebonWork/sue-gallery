import {
  BarChartBig,
  CircleUser,
  LayoutDashboard,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
import SidebarItem from "./SidebarItem";
const SidebarRoutes = () => {
  const routes = [
    {
      label: "Analytics",
      Icon: BarChartBig,
      href: "/dashboard/analytics",
    },
    {
      label: "Product",
      Icon: ShoppingBag,
      href: "/dashboard/products",
    },
    {
      label: "Categories",
      Icon: LayoutDashboard,
      href: "/dashboard/category",
    },
    {
      label: "Users",
      Icon: CircleUser,
      href: "/dashboard/users",
    },
    {
      label: "Orders",
      Icon: ShoppingCart,
      href: "/dashboard/orders",
    },
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

export default SidebarRoutes;
