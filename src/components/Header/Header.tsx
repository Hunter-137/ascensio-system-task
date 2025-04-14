import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="header">
      <h1 className="header__title">Product Catalog</h1>
      <nav className="header-navigation">
        <Link className="header-navigation__link" href={"/"}>
          Home
        </Link>
        <Link className="header-navigation__link" href={"/products"}>
          Products
        </Link>
        <Link className="header-navigation__link" href={"/card"}>
          Card
        </Link>
      </nav>
    </header>
  );
};

export default Header;
