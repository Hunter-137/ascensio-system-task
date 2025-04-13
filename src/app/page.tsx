import React from "react";
import cl from "./page.module.scss";
import Link from "next/link";

const Home = () => {
  return (
    <div className={cl.home}>
      <h2 className={cl.title}>Welcome!</h2>
      <p className={cl.text}>Here you can find a list of products.</p>
      <Link className={cl.link} href="/products">
        Products
      </Link>
    </div>
  );
};

export default Home;
