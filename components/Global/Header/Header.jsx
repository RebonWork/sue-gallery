"use client";
import { ShoppingCart } from "lucide-react";
import LinkedText from "../LinkedText";
import Logo from "../Logo";
import ProfileButton from "./ProfileButton";
import { SessionProvider } from "next-auth/react";

const Header = () => {
  return (
    <SessionProvider>
      <header className="flex justify-between items-center px-8 py-3 bg-custom-primary-800">
        <div className="flex gap-6 text-white">
          <LinkedText link="/" text="Home" />
          <LinkedText link="/products" text="Products" />
          <LinkedText link="/about" text="About" />
        </div>
        <div>
          <Logo />
        </div>

        <div className="flex gap-6 text-white">
          <ProfileButton />
          <ShoppingCart />
        </div>
      </header>
    </SessionProvider>
  );
};

export default Header;
