import Image from "next/image";
import galka from "../assets/galka.png";
import s from "./s.module.scss";

const Triangle: React.FC<{ offsetScroll: number }> = ({ offsetScroll }) => {
  return (
    <div
      style={{ transform: `scale(${offsetScroll / 100})` }}
      className={s["triangle-container"]}
    >
      <Image src={galka} alt="galka" />
    </div>
  );
};

export default Triangle;
