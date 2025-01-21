import Image from "next/image";
import smile from "../assets/smile.png";

import s from "./s.module.scss";

const Smile = () => {
  return (
    <div className={s["smile-block"]}>
      <Image className={s["smile"]} src={smile} alt="smile" />
    </div>
  );
};

export default Smile;
