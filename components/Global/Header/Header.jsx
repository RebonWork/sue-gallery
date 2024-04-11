"use client";
import { ShoppingCart } from "lucide-react";
import LinkedText from "../LinkedText";
import Logo from "../Logo";
import ProfileButton from "./ProfileButton";
import { SessionProvider } from "next-auth/react";

const Header = () => {
  return (
    <SessionProvider>
      <header className="header">
        <div className="items">
          <LinkedText link="/" text="Home" />
          <LinkedText link="/products" text="Products" />
          <LinkedText link="/about" text="About" />
        </div>
        <div>
          <Logo />
        </div>

        <div className="items">
          <ProfileButton />
          <ShoppingCart />
        </div>
      </header>
    </SessionProvider>
  );
};

export default Header;
