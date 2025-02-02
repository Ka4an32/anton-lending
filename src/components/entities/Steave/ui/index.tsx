import Image from "next/image";
import steave from "../assets/steave.jpg";

import s from "./s.module.scss";

const Steave: React.FC<{
  mousePosition: { x: number; y: number };
}> = ({ mousePosition: { x, y } }) => {
  return (
    <div className={s["steave-container"]}>
      <div
        style={{
          transform: `perspective(450px) rotateX(${-y / 4}deg) rotateY(${
            (x + 25) / 4
          }deg)`,
        }}
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
    </div>
  );
};

export default Steave;
