import Image from "next/image";
import smile from "../assets/smile.png";

import s from "./s.module.scss";

const Smile: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className={`${s["smile-block"]} ${isActive && s["active"]}`}>
      <Image className={s["smile"]} src={smile} alt="smile" />
    </div>
  );
};

export default Smile;
