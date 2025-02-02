import Image from "next/image";
import crumbs from "../assets/crumbs.png";

import s from "./s.module.scss";

const Crumbs: React.FC<{
  mousePosition: { x: number; y: number };
}> = ({ mousePosition: { x, y } }) => {
  return (
    <div
      style={{ transform: `translate(${-x / 3}px, ${y / 5}px)` }}
      className={s["crumbs-container"]}
    >
      <div className={s["crumbs-wrapper"]}>
        <Image
          className={s["durov"]}
          style={{ objectFit: "contain" }}
          fill
          src={crumbs}
          alt="durov"
          quality={100}
        />
      </div>
    </div>
  );
};

export default Crumbs;
