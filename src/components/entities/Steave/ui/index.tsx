import Image from "next/image";
import steave from "../assets/steave.jpg";

import s from "./s.module.scss";

const Steave: React.FC<{
  mousePosition: { x: number; y: number };
}> = ({ mousePosition: { x, y } }) => {
  return (
    <div
      style={{
        transform: `perspective(450px) rotateX(${-y / 2}deg) rotateY(${
          x / 2
        }deg)`,
      }}
      className={s["steave-container"]}
    >
      <Image
        className={s["steave"]}
        style={{ objectFit: "cover" }}
        fill
        src={steave}
        alt="steave"
        quality={100}
      />
    </div>
  );
};

export default Steave;
