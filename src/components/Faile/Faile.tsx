import { FC } from "react";
import cl from "./Faile.module.scss";

const Faile: FC = () => {
  return (
    <div className={cl.wrapper}>
      <h2 className={cl.faile}>
        Something went wrong. Please try again later.
      </h2>
    </div>
  );
};

export default Faile;
