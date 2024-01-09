"use client";
import Image from "next/image";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LinkedText from "../LinkedText";

const HeaderClient = ({ children }) => {
  return (
    <header className="header">
      <div className="items">
        <LinkedText link="/" text="Home" />
        <LinkedText link="/products" text="Products" />
        <LinkedText link="/about" text="About" />
      </div>
      <div>
        <Image src="./logo.svg" height={125} width={125} alt="Brand Logo" />
      </div>

      <div className="items">
        {children}
        <ShoppingCartIcon />
      </div>
    </header>
  );
};

export default HeaderClient;
