import Image from "next/image";

import GridBlock from "@/components/shared/ui/GridBlock";
import s from "./s.module.scss";

import Item from "./assets/item.jpg";
import Table from "./assets/table.png";
import Columns from "./assets/columns.jpg";
import Tools from "./assets/tools.jpg";

import Slide1 from "./assets/slide1.png";
import Slide2 from "./assets/slide2.png";
import Slide3 from "./assets/slide3.png";
import Slide4 from "./assets/slide4.png";
import Slide5 from "./assets/slide5.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const ThirdGrid = () => {
  return (
    <GridBlock>
      <div className={s["left"]}>
        <div className={s["left-row"]}>
          <Image className={s["item"]} src={Item} alt="item" />
          <Image className={s["table"]} src={Table} alt="table" />
        </div>
        <div className={s["left-row"]}>
          <Image className={s["columns"]} src={Columns} alt="columns" />
        </div>
        <div className={s["left-row"]}>
          <Image className={s["tools"]} src={Tools} alt="tools" />
        </div>
      </div>
      <div className={s["right"]}>
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 1.5,
              centeredSlides: true,
            },
          }}
          loop
          modules={[Autoplay]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            waitForTransition: false,
          }}
        >
          <SwiperSlide className={s["slide-container"]}>
            <Image className={s["slide"]} src={Slide2} alt="item" />
          </SwiperSlide>
          <SwiperSlide className={s["slide-container"]}>
            <Image className={s["slide"]} src={Slide1} alt="item" />
          </SwiperSlide>
          <SwiperSlide className={s["slide-container"]}>
            <Image className={s["slide"]} src={Slide3} alt="item" />
          </SwiperSlide>
          <SwiperSlide className={s["slide-container"]}>
            <Image className={s["slide"]} src={Slide4} alt="item" />
          </SwiperSlide>
          <SwiperSlide className={s["slide-container"]}>
            <Image className={s["slide"]} src={Slide5} alt="item" />
          </SwiperSlide>
        </Swiper>
      </div>
    </GridBlock>
  );
};

export default ThirdGrid;
