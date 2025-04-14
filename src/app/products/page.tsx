"use client";

import { FC, useMemo, useState } from "react";
import Link from "next/link";
import { observer } from "mobx-react-lite";
import Search from "@/components/Search/Search";
import Product from "@/components/Product/Product";
import Button from "@/components/Button/Button";
import { useFetch } from "@/hooks/useFetch";
import { STATUS, TApiData } from "@/types/types";
import cardStore from "@/store/cardStore";

import cl from "./page.module.scss";

const INITIAL_VISIBLE_COUNT = 3;
const LOAD_MORE_COUNT = 3;

const Products: FC = observer(() => {
  const { data: allProducts, status } = useFetch<TApiData[]>(
    "https://fakestoreapi.com/products"
  );
  const [visibleCount, setVisibleCount] = useState<number>(
    INITIAL_VISIBLE_COUNT
  );
  const [searchValue, setSearchValue] = useState<string>("");

  const filteredProducts = useMemo(() => {
    if (!allProducts) {
      return [];
    }
    if (!searchValue) {
      return allProducts;
    }
    const lowerCaseSearch = searchValue.toLowerCase();
    return allProducts.filter((product) =>
      product.title.toLowerCase().includes(lowerCaseSearch)
    );
  }, [allProducts, searchValue]);

  const productsToShow = useMemo(
    () => filteredProducts?.slice(0, visibleCount),
    [filteredProducts, visibleCount]
  );
  const hasMoreProducts = visibleCount < (filteredProducts?.length ?? 0);

  const handleAddToCart = (product: TApiData) => {
    cardStore.addProduct(product);
  };

  if (status === STATUS.LOADING) {
    return <div>Loading...</div>;
  }

  if (status === STATUS.ERROR) {
    return <div>Error</div>;
  }

  return (
    <>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />

      {filteredProducts.length === 0 &&
        searchValue &&
        status === STATUS.SUCCESS && (
          <div className={cl.no_results}>
            No products found matching your search.
          </div>
        )}

      <div className={cl.wrapper}>
        {productsToShow?.map((item) => (
          <div key={item.id}>
            <Link className={cl.link} href={`/products/${item.id}`}>
              <div className={cl.product}>
                <Product
                  title={item.title}
                  price={item.price}
                  image={item.image}
                />
              </div>
            </Link>
            <Button text="Add to Cart" onClick={() => handleAddToCart(item)} />
          </div>
        ))}
      </div>

      {hasMoreProducts && (
        <Button
          text="Show more"
          onClick={() => setVisibleCount(visibleCount + LOAD_MORE_COUNT)}
        ></Button>
      )}
    </>
  );
});

export default Products;
