import Image from "next/image";
import durov from "../assets/durov.jpg";

import s from "./s.module.scss";

const Durov: React.FC = () => {
  return (
    <div className={s["durov-container"]}>
      <div>
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
