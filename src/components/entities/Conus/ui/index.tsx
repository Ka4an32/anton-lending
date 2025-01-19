import Image from "next/image";
import conus from "../assets/conus.jpg";

import s from "./s.module.scss";

const Conus = () => {
  return (
    <div className={s["conus-container"]}>
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
