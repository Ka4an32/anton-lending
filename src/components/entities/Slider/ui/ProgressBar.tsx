"use client";

import { useSwiper } from "swiper/react";
import s from "./s.module.scss";
import { useEffect } from "react";

const ProgressBar: React.FC<{ scroll: number }> = ({ scroll }) => {
  const swiper = useSwiper();

  useEffect(() => {
    if (scroll) {
      swiper?.setProgress(scroll / 100, 0);
    }
  }, [scroll, swiper]);

  return <div className={s["progress-bar"]} />;
};

export default ProgressBar;
