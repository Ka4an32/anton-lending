import star from "../assets/star.gif";
import s from "./s.module.scss";

const Star = () => {
  return (
    <div className={s["star-block"]}>
      <img className={s["star"]} src={star.src} alt="star" />
    </div>
  );
};

export default Star;
