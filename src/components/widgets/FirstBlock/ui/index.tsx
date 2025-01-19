"use client";

import { useEffect, useRef, useState } from "react";

import s from "./s.module.scss";

import Header from "@/components/entities/Header";
import HeaderText from "@/components/shared/ui/text/HeaderText";

import FullSize from "@/components/entities/FullSize/ui";
import Conus from "@/components/entities/Conus/ui";
import Steave from "@/components/entities/Steave/ui";
import Nokia from "@/components/entities/Nokia/ui";
import getScrollY from "@/components/shared/helper/getScrollY";

const FirstBlock = () => {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollPage = getScrollY(ref, setScrollY);

    window.addEventListener("scroll", scrollPage);
    return () => window.removeEventListener("scroll", scrollPage);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transform: `translateY(${scrollY / 2}px)`,
        opacity:
          0 + ((window?.outerHeight - scrollY) / window.outerHeight).toFixed(3),
      }}
      className={s["first-block"]}
    >
      <Header />
      <div className={s["first-block__body"]}>
        <h1 className={s["first-block__title"]}>
          <HeaderText className={s["title"]}>
            Product Manager and Principle Product Designer with 5 years
            experience
          </HeaderText>
        </h1>
        <FullSize />
        <Conus />
        <Steave />
        <Nokia />
      </div>
    </div>
  );
};

export default FirstBlock;
