import Image from "next/image";
import s from "./s.module.scss";

import image from "../assets/image.gif";
import { useRef } from "react";
import Moveable from "react-moveable";

const ImageBottom = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <div ref={ref} className={s["image-container"]}>
        <Image src={image} width={195} height={370} alt="image" />
      </div>
      <Moveable
        target={ref}
        draggable={true}
        onDrag={(e) => {
          e.target.style.transform = e.transform;
        }}
      />
    </>
  );
};

export default ImageBottom;
