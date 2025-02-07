"use client";

import HeaderText from "@/components/shared/ui/text/HeaderText";
import s from "./s.module.scss";
import Triangle from "@/components/entities/Triangle/ui";
import Colleagues from "@/components/entities/Colleagues/ui";
import { useEffect, useRef, useState } from "react";
import getScrollY from "@/components/shared/helper/getScrollY";
import { useMediaQuery } from "usehooks-ts";

const RecomedationsBlock = () => {
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const [offsetScroll, setOffsetScroll] = useState(0);
  const [slideScroll, setSlideScroll] = useState(0);
  const [opacity, setOpacity] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollProcentFunc = () => {
      const value = Math.floor(
        (-(ref.current!.offsetTop - window.outerHeight - window.scrollY) /
          window.outerHeight) *
          100
      );

      if (value <= 0) setOffsetScroll(0);
      if (value >= 100) setOffsetScroll(100);
      if (value > 0 && value < 100) setOffsetScroll(value);
    };

    const getScroll = getScrollY(ref, setSlideScroll);

    if (!isMobile) {
      window.addEventListener("scroll", getScroll);
    } else {
      window.removeEventListener("scroll", getScroll);
    }

    window.addEventListener("scroll", scrollProcentFunc);
    return () => {
      window.removeEventListener("scroll", scrollProcentFunc);
      window.removeEventListener("scroll", getScroll);
    };
  }, [isMobile]);

  useEffect(() => {
    setOpacity(
      0 + +((window.outerHeight - slideScroll) / window.outerHeight).toFixed(3)
    );
  }, [slideScroll]);

  return (
    <section
      style={{
        transform: `translateY(${slideScroll / 2}px)`,
        opacity: opacity,
      }}
      ref={ref}
      className={s["fourty-block"]}
    >
      <Triangle offsetScroll={offsetScroll} />
      <h2
        className={`${s["fourty-block__title"]} ${
          offsetScroll >= 50 ? s["active"] : ""
        }`}
      >
        <HeaderText>
          Recommendations <br /> from my colleagues
        </HeaderText>
      </h2>
      <Colleagues offsetScroll={offsetScroll} />
    </section>
  );
};

export default RecomedationsBlock;
