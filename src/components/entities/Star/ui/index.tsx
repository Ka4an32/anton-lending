import Image from "next/image";
import star from "../assets/star.gif";
import s from "./s.module.scss";

const Star = () => {
  return (
    <div className={s["star-block"]}>
      <Image
        width={300}
        height={300}
        priority
        className={s["star"]}
        src={star.src}
        alt="star"
      />
    </div>
  );
};

export default Star;
