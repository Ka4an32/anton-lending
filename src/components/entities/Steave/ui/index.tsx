import Image from "next/image";
import steave from "../assets/steave.jpg";

import s from "./s.module.scss";

const Steave: React.FC = () => {
  return (
    <div className={s["steave-container"]}>
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
