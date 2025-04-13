"use client";

import { FC } from "react";
import Product from "@/components/Product/Product";
import { useFetch } from "@/hooks/useFetch";
import { STATUS } from "@/types/types";

import cl from "./page.module.scss";

const Products: FC = () => {
  const { data, status } = useFetch("https://fakestoreapi.com/products");

  if (status === STATUS.LOADING) {
    return <div>Loading...</div>;
  }

  if (status === STATUS.ERROR) {
    return <div>Error</div>;
  }

  return (
    <div className={cl.wrapper}>
      {data.map((item) => (
        <div key={item.id} className={cl.cart}>
          <Product name={item.title} price={item.price} image={item.image} />
        </div>
      ))}
    </div>
  );
};

export default Products;
