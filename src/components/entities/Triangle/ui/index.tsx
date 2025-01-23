import triangle from "../assets/triangle.gif";
import s from "./s.module.scss";

const Triangle = () => {
  return (
    <div className={s["triangle-container"]}>
      <img src={triangle.src} alt="triangle" />
    </div>
  );
};

export default Triangle;
