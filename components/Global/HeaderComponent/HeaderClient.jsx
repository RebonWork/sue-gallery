"use client";
import Image from "next/image";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LinkedText from "../LinkedText";
import Logo from "../Logo";

const HeaderClient = ({ children }) => {
  return (
    <header className="header">
      <div className="items">
        <LinkedText link="/" text="Home" />
        <LinkedText link="/products" text="Products" />
        <LinkedText link="/about" text="About" />
      </div>
      <div>
        <Logo/>
      </div>

      <div className="items">
        {children}
        <ShoppingCartIcon />
      </div>
    </header>
  );
};

export default HeaderClient;
