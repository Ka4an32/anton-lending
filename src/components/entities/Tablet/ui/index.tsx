import Image from "next/image";
import tablet from "../assets/tablet.webp";

import s from "./s.module.scss";

const Tablet: React.FC<{
  mousePosition: { x: number; y: number };
}> = ({ mousePosition: { x, y } }) => {
  return (
    <div className={s["tablet-container"]}>
      <Image
        className={s["tablet"]}
        style={{ objectFit: "contain" }}
        fill
        src={tablet}
        alt="tablet"
        quality={100}
      />
    </div>
  );
};

export default Tablet;
