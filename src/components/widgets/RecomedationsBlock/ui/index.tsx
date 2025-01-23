"use client";

import HeaderText from "@/components/shared/ui/text/HeaderText";
import s from "./s.module.scss";
import Triangle from "@/components/entities/Triangle/ui";
import Colleagues from "@/components/entities/Colleagues/ui";
import { useEffect, useRef, useState } from "react";
import getScrollY from "@/components/shared/helper/getScrollY";

const RecomedationsBlock = () => {
  const [slideScroll, setSlideScroll] = useState(0);
  const [opacity, setOpacity] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getScroll = getScrollY(ref, setSlideScroll);

    window.addEventListener("scroll", getScroll);
    return () => {
      window.addEventListener("scroll", getScroll);
    };
  }, []);

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
      <Triangle />
      <h2 className={s["fourty-block__title"]}>
        <HeaderText>
          Recommendations <br /> from my colleagues
        </HeaderText>
      </h2>
      <Colleagues />
    </section>
  );
};

export default RecomedationsBlock;
