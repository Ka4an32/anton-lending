"use client";

import HeaderText from "@/components/shared/ui/text/HeaderText";
import s from "./s.module.scss";
import Gallery from "@/components/entities/Gallery/ui";

import dynamic from "next/dynamic";

const ImageBottom = dynamic(() => import("@/components/entities/Image/ui"), {
  ssr: false,
});

const AboutMeBlock = () => {
  return (
    <section className={s["about-me"]}>
      <h2 className={s["about-me__title"]}>
        <HeaderText>
          I&nbsp;love design and prototyping, In&nbsp;my&nbsp;free time&nbsp;I
          write at&nbsp;swift, swiftui, uikit, launch pet projects and walk with
          the corgi dog
        </HeaderText>
      </h2>
      <Gallery />
      <ImageBottom />
    </section>
  );
};

export default AboutMeBlock;
