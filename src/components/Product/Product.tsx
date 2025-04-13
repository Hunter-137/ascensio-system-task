import React from "react";
import Image from "next/image";

import cl from "./Product.module.css";

const Product = () => {
  return (
    <div className={cl.cart}>
      <div className={cl.__img}>
        <Image
          src="https://img.icons8.com/ios-glyphs/30/000000/shopping-cart.png"
          alt="image"
          width={30}
          height={30}
        />
      </div>
      <div className={cl.__desc}>
        <p>Product</p>
        <span>0</span>
      </div>
    </div>
  );
};

export default Product;
