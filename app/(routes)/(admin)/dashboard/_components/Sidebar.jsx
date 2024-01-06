import LinkedText from "@/components/Global/LinkedText";
import SignOut from "@/app/(routes)/(auth)/_component/SignOut";
import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdPeopleOutline } from "react-icons/md";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Link className="sidebar-item" href={"/"}>
        <HiOutlineHome />
        <h1>Home</h1>
      </Link>
      <Link className="sidebar-item" href={"/dashboard"}>
        <LuLayoutDashboard />
        <h1>Dashboard</h1>
      </Link>
      <Link className="sidebar-item" href={"/dashboard/products"}>
        <HiOutlineShoppingBag />
        <h1>Products</h1>
      </Link>
      <Link className="sidebar-item" href={"/dashboard/orders"}>
        <MdOutlineShoppingCart />
        <h1>Orders</h1>
      </Link>
      <Link className="sidebar-item" href={"/dashboard/category"}>
        <MdPeopleOutline />
        <h1>Category</h1>
      </Link>
      <Link className="sidebar-item" href={"/dashboard/users"}>
        <MdPeopleOutline />
        <h1>Users</h1>
      </Link>
      <SignOut />
    </aside>
  );
};

export default Sidebar;
