"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import cl from "./ProductDetail.module.scss";
import { useFetch } from "@/hooks/useFetch";
import { STATUS, TApiData } from "@/types/types";
import { useParams } from "next/navigation";
import Button from "@/components/Button/Button";

const ProductDetail: FC = () => {
  const { id } = useParams();
  const { data: oneProduct, status } = useFetch<TApiData>(
    `https://fakestoreapi.com/products/${id}`
  );

  if (status === STATUS.LOADING) {
    return <div>Loading...</div>;
  }

  if (status === STATUS.ERROR) {
    return <div>Error</div>;
  }

  return (
    <div className={cl.wrapper}>
      <div className={cl.img}>
        <Image
          className={cl.img__item}
          src={oneProduct?.image ?? ""}
          alt="product image"
          width={200}
          height={200}
        />
      </div>
      <div className={cl.description}>
        <p className={cl.title}>{oneProduct?.title}</p>
        <p className={cl.category}>Category: {oneProduct?.category}</p>
        <p className={cl.price}>
          Price: <span>${oneProduct?.price}</span>
        </p>
        <p className={cl.text}>{oneProduct?.description}</p>
        <p className={cl.rate}>Rate: {oneProduct?.rating.rate}</p>
        <p className={cl.count}>Sold: {oneProduct?.rating.count}</p>
      </div>
      <Link className={cl.button} href="/products">
        <Button text="Back" />
      </Link>
    </div>
  );
};

export default ProductDetail;
