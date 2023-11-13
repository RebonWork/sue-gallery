import React from "react";
import LinkedText from "../Global/LinkedText";
import SignOut from "../Auth/SignOut";

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
