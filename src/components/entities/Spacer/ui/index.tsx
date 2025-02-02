import Image from "next/image";
import spacer from "../assets/spacer.jpg";

import s from "./s.module.scss";

const Spacer: React.FC<{
  mousePosition: { x: number; y: number };
}> = ({ mousePosition: { x, y } }) => {
  return (
    <div className={s["spacer-container"]}>
      <Image
        className={s["spacer"]}
        style={{ objectFit: "contain" }}
        fill
        src={spacer}
        alt="spacer"
        quality={100}
      />
    </div>
  );
};

export default Spacer;
