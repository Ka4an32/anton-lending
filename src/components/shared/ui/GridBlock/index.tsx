import { PropsWithChildren } from "react";
import s from "./s.module.scss";

const GridBlock: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={s["grid-block"]}>{children}</div>;
};

export default GridBlock;
