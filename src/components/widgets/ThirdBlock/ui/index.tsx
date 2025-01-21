"use client";

import { useEffect, useRef, useState } from "react";

import HeaderText from "@/components/shared/ui/text/HeaderText";
import s from "./s.module.scss";
import Smile from "@/components/entities/Smile/ui";
import Star from "@/components/entities/Star/ui";

const ThirdBlock = () => {
  const [scroll, setScroll] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  console.log(scroll);

  useEffect(() => {
    const scrollProcentFunc = () =>
      setScroll(Math.floor((window.scrollY / ref.current!.offsetTop) * 100));
    window.addEventListener("scroll", scrollProcentFunc);
    return () => {
      window.removeEventListener("scroll", scrollProcentFunc);
    };
  }, []);

  return (
    <section ref={ref} className={s["third-block"]}>
      <Smile />
      <h2>
        <HeaderText className={s["third-block__text"]}>
          <span className={scroll >= 90 ? s["active"] : ""}>
            I saved over 100 million for a top-1 bank by launching an MLP
            product,
          </span>{" "}
          <span className={scroll >= 97 ? s["active"] : ""}>
            worked at mts, sberbank, consulting, launched 10+ products for b2c
            startups
          </span>
        </HeaderText>
      </h2>
      <Star />
    </section>
  );
};

export default ThirdBlock;
