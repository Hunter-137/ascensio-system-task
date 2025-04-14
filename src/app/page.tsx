import React from "react";
import cl from "./page.module.scss";
import Link from "next/link";
import Button from "@/components/Button/Button";

const Home = () => {
  return (
    <div className={cl.home}>
      <h2 className={cl.title}>Welcome!</h2>
      <p className={cl.text}>Here you can find a list of products.</p>
      <Link className={cl.button} href="/products">
        <Button text="Go to products!" />
      </Link>
    </div>
  );
};

export default Home;
