"use client";

import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";

import { useMediaQuery } from "usehooks-ts";

import s from "./s.module.scss";

// Mobile slide
import Mob1 from "../assets/1_mobile.jpg";
import Mob2 from "../assets/2_mobile.jpg";
import Mob3 from "../assets/3_mobile.jpg";
import Mob4 from "../assets/4_mobile.jpg";

// Desktop slide
import Des1 from "../assets/1_desk.jpg";
import Des2 from "../assets/2_desk.jpg";
import Des3 from "../assets/3_desk.jpg";

import ProgressBar from "./ProgressBar";

const imagesMobile = [Mob1, Mob2, Mob3, Mob4];
const imagesDesktop = [Des1, Des2, Des3];

const Slider: React.FC<{ scroll: number }> = ({ scroll }) => {
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const [height, setHeight] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setHeight(window.outerHeight * imagesMobile.length);
  }, []);

  if (typeof window !== "undefined") {
    return (
      <div className={s["slider-block"]}>
        <style>
          {`
            :root {
              --mobile-slider-block-height: ${height}px;
              --progress-slider: ${progress}%;
            }
          `}
        </style>
        <Swiper
          modules={[FreeMode, Pagination]}
          pagination={{
            enabled: true,
            type: "progressbar",
          }}
          spaceBetween={10}
          onProgress={(_, _progress) => {
            const progressValue = Math.floor(_progress * 100);

            setProgress(progressValue);
          }}
          freeMode={{
            enabled: true,
            momentumBounce: false,
          }}
          draggable={false}
          allowTouchMove={false}
          className={s["slider"]}
        >
          {(isMobile ? imagesMobile : imagesDesktop).map((image, index) => (
            <SwiperSlide className={s["slide"]} key={index}>
              <img src={image.src} />
            </SwiperSlide>
          ))}
          <ProgressBar scroll={scroll} />
        </Swiper>
      </div>
    );
  }

  return null;
};

export default Slider;
