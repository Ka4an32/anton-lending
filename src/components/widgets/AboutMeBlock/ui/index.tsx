"use client";

import HeaderText from "@/components/shared/ui/text/HeaderText";
import s from "./s.module.scss";
import { useEffect, useRef, useState } from "react";
import FirstGrid from "@/components/entities/FirstGrid";
import SecondGrid from "@/components/entities/SecondGrid";
import ThirdGrid from "@/components/entities/ThirdGrid";

import Dashboard from "../assets/dashboard.jpg";
import Code from "../assets/code.jpg";
import Diagramm from "../assets/diagramm.jpg";
import ImageBottom from "@/components/entities/Image/ui";
import FourtyGrid from "@/components/entities/FourtyGrid/ui";

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

    return () => {
      window.removeEventListener("scroll", scrollProcentFunc);
    };
  });

  return (
    <section ref={ref} className={s["about-me"]}>
      <h2
        className={`${s["about-me__title"]} ${
          offsetScroll >= 35 ? s["active"] : ""
        }`}
      >
        <HeaderText>
          I love design and prototyping, In my free time I write at swift,
          swiftui, uikit, launch pet projects and walk with the corgi dog
        </HeaderText>
      </h2>
      <FirstGrid offsetScroll={offsetScroll} />
      <SecondGrid position="right" image={Dashboard} />
      <ThirdGrid />
      <FourtyGrid />
      <SecondGrid position="left" image={Code} />
      <SecondGrid position="center" image={Diagramm} />
      <ImageBottom />
    </section>
  );
};

export default AboutMeBlock;
