import { useSwiper } from "swiper/react";
import s from "./s.module.scss";
import { useEffect } from "react";

const ProgressBar: React.FC<{ scroll: number }> = ({ scroll }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.setProgress(scroll / 100, 50);
  }, [scroll]);

  return <div className={s["progress-bar"]} />;
};

export default ProgressBar;
