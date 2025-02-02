import Image from "next/image";
import zuckerberg from "../assets/zuckerberg.jpg";

import s from "./s.module.scss";

const Zuckerberg: React.FC<{
  mousePosition: { x: number; y: number };
}> = ({ mousePosition: { x, y } }) => {
  return (
    <div className={s["zukerberg-container"]}>
      <div
        style={{
          transform: `perspective(450px) rotateX(${-y / 4}deg) rotateY(${
            (x - 50) / 4
          }deg)`,
        }}
      >
        <Image
          className={s["zukerberg"]}
          style={{ objectFit: "cover" }}
          fill
          src={zuckerberg}
          alt="zukerberg"
          quality={100}
        />
      </div>
    </div>
  );
};

export default Zuckerberg;
