import Image from "next/image";
import star from "../assets/star.webp";
import s from "./s.module.scss";

const Star: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className={`${s["star-block"]} ${isActive && s["active"]}`}>
      <Image
        width={300}
        height={300}
        priority
        src={star}
        className={s["star"]}
        alt="star"
      />
    </div>
  );
};

export default Star;
