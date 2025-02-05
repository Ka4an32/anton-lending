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
import { useMediaQuery } from "usehooks-ts";
import Durov from "@/components/entities/Durov/ui";
import Crumbs from "@/components/entities/Crumbs/ui";
import Zuckerberg from "@/components/entities/Zuckerberg/ui";
import Spacer from "@/components/entities/Spacer/ui";
import Tablet from "@/components/entities/Tablet/ui";

const FirstBlock = () => {
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const [scrollY, setScrollY] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.addEventListener("mousemove", (e) => {
      if (!isMobile) {
        setMousePosition({
          x: Math.floor((e.pageX / window.innerWidth) * 100) - 50,
          y: Math.floor((e.pageY / window.innerHeight) * 100) - 50,
        });
      }
    });
  }, [isMobile]);

  useEffect(() => {
    const scrollPage = getScrollY(ref, setScrollY);

    if (!isMobile) {
      window.addEventListener("scroll", scrollPage);
    } else {
      window.removeEventListener("scroll", scrollPage);
    }

    return () => window.removeEventListener("scroll", scrollPage);
  }, [isMobile]);

  useEffect(() => {
    setOpacity(
      0 + +((window.outerHeight - scrollY) / window.outerHeight).toFixed(3)
    );
  }, [scrollY]);

  return (
    <div
      ref={ref}
      style={{
        transform: `translateY(${scrollY / 2}px)`,
        opacity: opacity,
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
        <Conus mousePosition={mousePosition} />
        <Steave mousePosition={mousePosition} />
        <Durov />
        <Crumbs mousePosition={mousePosition} />
        <Zuckerberg mousePosition={mousePosition} />
        <Spacer mousePosition={mousePosition} />
        <Tablet mousePosition={mousePosition} />
        <Nokia mousePosition={mousePosition} />
      </div>
    </div>
  );
};

export default FirstBlock;
