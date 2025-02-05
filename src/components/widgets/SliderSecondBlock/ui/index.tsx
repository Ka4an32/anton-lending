"use client";

import TitleText from "@/components/shared/ui/text/TitleText";
import s from "./s.module.scss";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import getScrollY from "@/components/shared/helper/getScrollY";
import dynamic from "next/dynamic";
import { useMediaQuery } from "usehooks-ts";

const Slider = dynamic(() => import("@/components/entities/Slider/ui"), {
  ssr: false,
});

const texts = [
  "Launched an analogue of perplexity app inside MTS with 20m mau, +12% Conversion rate in leads",
  "Tested hypotheses for ai vision analysis startup",
  "Launched an edtech product for a UK startup, designed 100+ screens and 10+ flows",
  "Product concept for mts futurecrew, Worked for more than 2 months on visual concepts, formation of the target application",
];

const SliderSecondBlock = () => {
  const [offsetScroll, setOffsetScroll] = useState(0);
  const [scrollSliderY, setScrollSliderY] = useState(0);
  const [scrollY, setScrollY] = useState(0.01);
  const [opacity, setOpacity] = useState(0);
  const isMobile = useMediaQuery("(max-width: 1023px)");

  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const scrollProcentFunc = () => {
      const value = Math.floor(
        (-(
          containerRef.current!.offsetTop -
          window.outerHeight -
          window.scrollY
        ) /
          window.outerHeight) *
          100
      );
      if (value <= 0) setOffsetScroll(0);
      if (value >= 100) setOffsetScroll(100);
      if (value > 0 && value < 100) setOffsetScroll(value);
    };

    window.addEventListener("scroll", scrollProcentFunc);
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
      window.addEventListener("scroll", scrollProcentFunc);
      if (!isMobile) {
        window.addEventListener("scroll", getScroll);
      } else {
        window.removeEventListener("scroll", getScroll);
      }
    }
    return () => {
      window.removeEventListener("scroll", scrollProcentFunc);
      window.removeEventListener("scroll", func);
      window.removeEventListener("scroll", getScroll);
    };
  }, [isMobile]);

  useEffect(() => {
    setOpacity(
      0 + +((window.outerHeight - scrollY) / window.outerHeight).toFixed(3)
    );
  }, [scrollY]);

  return (
    <div
      style={{
        transform: `translateY(${scrollY / 2}px)`,
        opacity: opacity,
      }}
      ref={containerRef}
      className={s["second-block"]}
    >
      <section ref={ref} className={s["second-block__sticky"]}>
        <h2
          className={`${s["second-block__title"]} ${
            offsetScroll >= 35 ? s["active"] : ""
          }`}
        >
          {texts.map((text, i) => {
            const index = i + 1;
            const oneItemsProcent = 100 / texts.length;
            const part = Math.ceil((scrollSliderY - 1) / oneItemsProcent) || 1;
            const partScrollPocent =
              ((scrollSliderY - oneItemsProcent * i) / oneItemsProcent) * 100;

            const opacityVector = ((partScrollPocent - 50) * 2) / 100;
            let opacity;

            if (part === 1) {
              opacity = 1 - opacityVector * 2;
            } else if (part === texts.length) {
              opacity = (opacityVector + 0.5) * 2;
            } else {
              opacity =
                opacityVector < 0 ? 1 + opacityVector : 1 - opacityVector;
            }

            return (
              <TitleText
                key={text}
                className={`${s["second-block__title-item"]} ${
                  index === part ? s["second-block__title-item_active"] : ""
                }`}
                style={{
                  height: index === part ? "auto" : "0px",
                  opacity,
                }}
              >
                {text}
              </TitleText>
            );
          })}
        </h2>
        <Slider scroll={scrollSliderY} />
      </section>
    </div>
  );
};

export default SliderSecondBlock;
