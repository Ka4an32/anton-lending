import Image from "next/image";
import conus from "../assets/conus.jpg";

import s from "./s.module.scss";

const Conus: React.FC<{
  mousePosition: { x: number; y: number };
}> = ({ mousePosition: { x, y } }) => {
  return (
    <div
      style={{
        transform: `rotate(50deg) translate(${x / 3}px, ${-y / 3}px)`,
      }}
      className={s["conus-container"]}
    >
      <Image
        className={s["conus"]}
        style={{ objectFit: "contain" }}
        fill
        sizes="(min-width: 567px) 20vw"
        src={conus}
        alt="conus"
        quality={100}
      />
    </div>
  );
};

export default Conus;
