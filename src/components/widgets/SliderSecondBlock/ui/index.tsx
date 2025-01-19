"use client";

import TitleText from "@/components/shared/ui/text/TitleText";
import s from "./s.module.scss";
import Slider from "@/components/entities/Slider/ui";
import { useLayoutEffect, useRef, useState } from "react";
import getScrollY from "@/components/shared/helper/getScrollY";

const SliderSecondBlock = () => {
  const [scrollSliderY, setScrollSliderY] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const func = () => {
      const offsetTop = ref.current!.parentElement!.offsetTop + 50;
      if (window.scrollY >= offsetTop) {
        const scrollPosition =
          ((window.scrollY - offsetTop) /
            (ref.current!.parentElement!.scrollHeight -
              window.outerHeight -
              200)) *
          100;

        if (scrollPosition > 100) setScrollSliderY(100);
        if (scrollPosition < 0) setScrollSliderY(0);
        if (scrollPosition > 0 && scrollPosition < 100)
          setScrollSliderY(scrollPosition);
      }
    };

    const getScroll = getScrollY(containerRef, setScrollY);

    if (ref.current) {
      window.addEventListener("scroll", func);
      window.addEventListener("scroll", getScroll);
    }
    return () => {
      window.removeEventListener("scroll", func);
      window.removeEventListener("scroll", getScroll);
    };
  }, []);

  return (
    <div
      style={{
        transform: `translateY(${scrollY / 2}px)`,
        opacity:
          0 + ((window?.outerHeight - scrollY) / window.outerHeight).toFixed(3),
      }}
      ref={containerRef}
      className={s["second-block"]}
    >
      <section ref={ref} className={s["second-block__sticky"]}>
        <h2 className={s["second-block__title"]}>
          <TitleText>
            Launched an analogue of perplexity app inside MTS with 20m mau, +12%
            Conversion rate in leads
          </TitleText>
        </h2>
        <Slider scroll={scrollSliderY} />
      </section>
    </div>
  );
};

export default SliderSecondBlock;
