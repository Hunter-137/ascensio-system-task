import { FC } from "react";
import cl from "./Error.module.scss";

const Error: FC = () => {
  return (
    <div className={cl.wrapper}>
      <h2 className={cl.error}>
        Something went wrong. Please try again later.
      </h2>
    </div>
  );
};

export default Error;
