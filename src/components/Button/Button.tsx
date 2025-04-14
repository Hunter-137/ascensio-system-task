import { FC } from "react";
import cl from "./Button.module.scss";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={cl.button}>
      {text}
    </button>
  );
};

export default Button;
