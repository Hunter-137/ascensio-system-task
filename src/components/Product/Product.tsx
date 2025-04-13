import { FC } from "react";
import Image from "next/image";

import cl from "@/components/Product/Product.module.scss";

interface ProductProps {
  name: string;
  price: number;
  image: string;
}

const Product: FC<ProductProps> = ({ name, price, image }) => {
  return (
    <>
      <div className={cl.__img}>
        <Image src={image} alt="image" width={30} height={30} />
      </div>
      <div className={cl.__desc}>
        <p>{name}</p>
        <span>{price}</span>
      </div>
    </>
  );
};

export default Product;
