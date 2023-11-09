"use server";
import Image from "next/image";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LinkedText from "./LinkedText";
const Header = async () => {
  return (
    <header className="header">
      <div className="pages">
        <LinkedText link="/" text="Home" />
        <LinkedText link="/products" text="Products" />
        <LinkedText link="/about" text="About" />
      </div>
      <div>
        <Image src="./logo.svg" height={125} width={125} alt="Brand Logo" />
      </div>

      <div>
        <PersonIcon />
        <ShoppingCartIcon />
      </div>
    </header>
  );
};

export default Header;
