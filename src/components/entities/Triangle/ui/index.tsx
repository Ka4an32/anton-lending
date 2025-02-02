import Image from "next/image";
import galka from "../assets/galka.png";
import s from "./s.module.scss";

const Triangle = () => {
  return (
    <div className={s["triangle-container"]}>
      <Image src={galka} alt="galka" />
    </div>
  );
};

export default Triangle;
