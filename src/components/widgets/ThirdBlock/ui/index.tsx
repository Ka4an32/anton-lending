"use client";

import { useEffect, useRef, useState } from "react";

import HeaderText from "@/components/shared/ui/text/HeaderText";
import s from "./s.module.scss";
import Smile from "@/components/entities/Smile/ui";
import Star from "@/components/entities/Star/ui";
import getScrollY from "@/components/shared/helper/getScrollY";

const ThirdBlock = () => {
  const [scroll, setScroll] = useState(0);
  const [slideScroll, setSlideScroll] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  console.log(scroll);

  useEffect(() => {
    const scrollProcentFunc = () =>
      setScroll(Math.floor((window.scrollY / ref.current!.offsetTop) * 100));

    const getScroll = getScrollY(ref, setSlideScroll);

    window.addEventListener("scroll", scrollProcentFunc);
    window.addEventListener("scroll", getScroll);
    return () => {
      window.removeEventListener("scroll", scrollProcentFunc);
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
      className={s["third-block"]}
    >
      <Smile />
      <h2>
        <HeaderText className={s["third-block__text"]}>
          <span className={scroll >= 93 ? s["active"] : ""}>
            I&nbsp;saved over 100 million for a&nbsp;top-1 bank
            by&nbsp;launching an&nbsp;MLP product,
          </span>{" "}
          <span className={scroll >= 99 ? s["active"] : ""}>
            worked at&nbsp;mts, sberbank, consulting, launched 10+&nbsp;products
            for b2c startups
          </span>
        </HeaderText>
      </h2>
      <Star />
    </section>
  );
};

export default ThirdBlock;
