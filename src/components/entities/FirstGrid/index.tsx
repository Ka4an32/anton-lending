import GridBlock from "@/components/shared/ui/GridBlock";

import s from "./s.module.scss";
import TitleText from "@/components/shared/ui/text/TitleText";
import Image from "next/image";

import Chat from "./assets/chat.jpg";
import { useLayoutEffect, useMemo, useRef } from "react";

import numberFormatter from "number-formatter";

const GridItem: React.FC<{
  summary: number;
  desk: string;
  info: string;
  value: string;
  time: number;
  step: number;
  offsetScroll: number;
  vector: "up" | "down";
}> = ({ summary, desk, info, value, time, step, vector, offsetScroll }) => {
  const ref = useRef(null);
  function outNum(
    ref: any,
    num: number,
    step: number,
    time: number,
    value?: string
  ) {
    let n = 0;
    const t = Math.round(time / (num / step));
    const interval = setInterval(() => {
      n = n + step;
      if (n >= num) {
        clearInterval(interval);
      }
      ref.current.innerHTML = numberFormatter(value, n);
    }, t);
  }

  const isCalculate = useMemo(() => offsetScroll > 45, [offsetScroll]);

  useLayoutEffect(() => {
    if (isCalculate) {
      console.log("calculate");
      outNum(ref, summary, step, time, value);
    }
  }, [isCalculate]);

  return (
    <div className={s["left__grid-item"]}>
      <p ref={ref} className={`${s["summary"]}`}>
        ${}
      </p>
      <p className={`${s["desk"]} ${s[vector]}`}>{desk}</p>
      <p className={s["info"]}>{info}</p>
    </div>
  );
};

const FirstGrid: React.FC<{ offsetScroll: number }> = ({ offsetScroll }) => {
  return (
    <GridBlock>
      <div className={s["left"]}>
        <h3>
          <TitleText className={s["left__title"]}>General</TitleText>
        </h3>
        <div className={s["left__grid"]}>
          <GridItem
            offsetScroll={offsetScroll}
            vector="up"
            time={2500}
            summary={32200}
            step={100}
            value="$#,###.#0"
            desk="Up $35.4K from last 30 days"
            info="Total balance"
          />
          <GridItem
            offsetScroll={offsetScroll}
            vector="up"
            time={1000}
            summary={11.2}
            step={0.1}
            value="$#.#K"
            desk="Up 2K from last 31 days"
            info="Total Income"
          />
          <GridItem
            offsetScroll={offsetScroll}
            vector="down"
            time={2000}
            summary={3.2}
            step={0.1}
            value="$#.#K"
            desk="Down 2K from last 31 days"
            info="Total expenses"
          />
          <GridItem
            offsetScroll={offsetScroll}
            vector="up"
            time={3500}
            summary={112}
            step={1}
            value="#.#"
            desk="Up 12 from last 30 days"
            info="Total transactions"
          />
        </div>
      </div>
      <div className={s["right"]}>
        <Image src={Chat} alt="chat" className={s["right__image"]} />
      </div>
    </GridBlock>
  );
};

export default FirstGrid;
