"use client";

import { FC, useMemo, useState } from "react";
import Product from "@/components/Product/Product";
import { useFetch } from "@/hooks/useFetch";
import { STATUS } from "@/types/types";

import cl from "./page.module.scss";
import Button from "@/components/Button/Button";

const INITIAL_VISIBLE_COUNT = 3;
const LOAD_MORE_COUNT = 3;

const Products: FC = () => {
  const { data: allProducts, status } = useFetch(
    "https://fakestoreapi.com/products"
  );
  const [visibleCount, setVisibleCount] = useState<number>(
    INITIAL_VISIBLE_COUNT
  );
  const productsToShow = useMemo(
    () => allProducts.slice(0, visibleCount),
    [allProducts, visibleCount]
  );
  const hasMoreProducts = visibleCount < allProducts.length;

  if (status === STATUS.LOADING) {
    return <div>Loading...</div>;
  }

  if (status === STATUS.ERROR) {
    return <div>Error</div>;
  }

  return (
    <div className={cl.wrapper}>
      {productsToShow.map((item) => (
        <div key={item.id} className={cl.product}>
          <Product title={item.title} price={item.price} image={item.image} />
        </div>
      ))}

      {hasMoreProducts && (
        <Button
          text="Show more"
          onClick={() => setVisibleCount(visibleCount + LOAD_MORE_COUNT)}
        >
        </Button>
      )}
    </div>
  );
};

export default Products;
