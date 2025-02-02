import Image from "next/image";
import durov from "../assets/durov.jpg";

import s from "./s.module.scss";

const Durov: React.FC<{
  mousePosition: { x: number; y: number };
}> = ({ mousePosition: { x, y } }) => {
  return (
    <div className={s["durov-container"]}>
      <div
        style={{
          transform: `translate(${x / 10}px, ${y / 5}px)`,
        }}
      >
        <Image
          className={s["durov"]}
          style={{ objectFit: "contain" }}
          fill
          src={durov}
          alt="durov"
          quality={100}
        />
      </div>
    </div>
  );
};

export default Durov;
