"use client";

import HeaderText from "@/components/shared/ui/text/HeaderText";
import s from "./s.module.scss";
import Gallery from "@/components/entities/Gallery/ui";
import ImageBottom from "@/components/entities/Image/ui";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useRef, useState } from "react";

const AboutMeBlock = () => {
  const [offsetScroll, setOffsetScroll] = useState(0);

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

    window.addEventListener("scroll", scrollProcentFunc);
  });

  console.log(offsetScroll);

  return (
    <section ref={ref} className={s["about-me"]}>
      <h2 className={s["about-me__title"]}>
        <HeaderText>
          {offsetScroll > 1 && (
            <TypeAnimation
              sequence={[
                "I love design and prototyping, In my free time I write at swift, swiftui, uikit, launch pet projects and walk with the corgi dog",
              ]}
            />
          )}
        </HeaderText>
      </h2>
      <Gallery />
      <ImageBottom />
    </section>
  );
};

export default AboutMeBlock;
