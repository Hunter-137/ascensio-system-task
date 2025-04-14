import { FC } from "react";
import cl from "./Loading.module.scss";

const Loading: FC = () => {
  return (
    <div className={cl.wrapper}>
      <div className={cl.loading}></div>
    </div>
  );
};

export default Loading;
