import LinkedText from "@/components/Global/LinkedText";
import SignOut from "@/app/(routes)/(auth)/_component/SignOut";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <LinkedText link="/" text="Home" />
      <LinkedText link="/dashboard" text="Dashboard" />
      <LinkedText link="/dashboard/products" text="Products" />
      <LinkedText link="/dashboard/users" text="Users" />
      <SignOut/>
    </aside>
  );
};

export default Sidebar;
