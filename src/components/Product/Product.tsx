import { FC } from "react";
import Image from "next/image";

import cl from "@/components/Product/Product.module.scss";

interface ProductProps {
  title: string;
  price: number;
  image: string;
}

const Product: FC<ProductProps> = ({ title, price, image }) => {
  return (
    <>
      <div className={cl.img}>
        <Image
          className={cl.img__item}
          src={image}
          alt="product image"
          width={200}
          height={200}
        />
      </div>
      <div className={cl.desc}>
        <p className={cl.title}>{title}</p>
        <p className={cl.price}>
          Price: <span>${price}</span>
        </p>
      </div>
    </>
  );
};

export default Product;
