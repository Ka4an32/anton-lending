"use client";

import { useEffect, useRef, useState } from "react";

import HeaderText from "@/components/shared/ui/text/HeaderText";
import s from "./s.module.scss";
import Smile from "@/components/entities/Smile/ui";
import Star from "@/components/entities/Star/ui";
import getScrollY from "@/components/shared/helper/getScrollY";
import { useMediaQuery } from "usehooks-ts";

const ThirdBlock = () => {
  const [scroll, setScroll] = useState(0);
  const [scrollBlock, setScrollBlock] = useState(0);
  const [slideScroll, setSlideScroll] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const isMobile = useMediaQuery("(max-width: 1023px)");

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollProcentFunc = () => {
      const value = Math.floor((window.scrollY / ref.current!.offsetTop) * 100);
      if (value > 100) setScroll(100);
      if (value < 0) setScroll(0);
      if (value > 0 && value < 100) setScroll(value);
    };
    const getScroll = getScrollY(ref, setSlideScroll);

    window.addEventListener("scroll", () => {
      const scrollValue = -(ref.current!.offsetTop - window.scrollY);
      if (scrollValue > 0) {
        const scrollProcent =
          (scrollValue + window.innerHeight) / ref.current!.scrollHeight;

        if (scrollProcent > 1) setScrollBlock(100);
        if (scrollProcent < 0.5) setScrollBlock(0);
        if (scrollProcent > 0.5 && scrollProcent < 1)
          setScrollBlock(Math.floor(scrollProcent * 100));
      }
    });

    window.addEventListener("scroll", scrollProcentFunc);

    if (!isMobile) {
      window.addEventListener("scroll", getScroll);
    } else {
      window.removeEventListener("scroll", getScroll);
    }
    return () => {
      window.removeEventListener("scroll", scrollProcentFunc);
      window.removeEventListener("scroll", getScroll);
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
      className={s["third-block-wrapper"]}
    >
      <div className={s["third-block"]}>
        <Smile isActive={scroll >= 90} />
        <h2>
          <HeaderText className={s["third-block__text"]}>
            <span
              className={`${scroll >= 92 ? s["active"] : ""} ${
                scrollBlock >= 55 ? s["light"] : ""
              }`}
            >
              I&nbsp;saved over 100 million for a&nbsp;top-1 bank
              by&nbsp;launching an&nbsp;MLP product,
            </span>{" "}
            <span
              className={`${scroll >= 98 ? s["active"] : ""} ${
                scrollBlock >= 75 ? s["light"] : ""
              }`}
            >
              worked at&nbsp;mts, sberbank, consulting, launched
              10+&nbsp;products for b2c startups
            </span>
          </HeaderText>
        </h2>
        <Star isActive={scroll >= 98} />
      </div>
    </section>
  );
};

export default ThirdBlock;
