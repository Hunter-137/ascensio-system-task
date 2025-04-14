"use client";

import { FC } from "react";
import { observer } from "mobx-react-lite";
import cardStore from "@/store/cardStore";
import Product from "@/components/Product/Product";
import Button from "@/components/Button/Button";
import Link from "next/link";

import cl from "./Card.module.scss";

const CardPage: FC = observer(() => {
  const { choosedProducts, totalPrice, totalItems } = cardStore;

  const handleRemove = (productId: number) => {
    cardStore.removeProduct(productId);
  };

  return (
    <div className={cl.card}>
      <h2 className={cl.title}>Your Cart</h2>

      {totalItems === 0 ? (
        <div className={cl.card__empty}>
          <h3>Your cart is empty.</h3>
          <Link href="/products">
            <Button text="Go to products"></Button>
          </Link>
        </div>
      ) : (
        <>
          <div className={cl.card__list}>
            {choosedProducts.map((product) => (
              <div key={product.id} className={cl.card__item}>
                <div className={cl.card__product}>
                  <Link href={`/products/${product.id}`}>
                    <Product
                      title={product.title}
                      price={product.price}
                      image={product.image}
                    />
                  </Link>
                </div>
                <Button
                  text="Remove"
                  onClick={() => handleRemove(product.id)}
                />
              </div>
            ))}
          </div>

          <div className={cl.card__summary}>
            <h3>Summary</h3>
            <p>Total Items: {totalItems}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
});

export default CardPage;
