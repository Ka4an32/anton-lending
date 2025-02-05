import Image, { StaticImageData } from "next/image";

import s from "./s.module.scss";

const SecondGrid: React.FC<{
  image: StaticImageData;
  position: "right" | "left" | "center";
}> = ({ image, position }) => {
  return (
    <Image
      src={image}
      alt="dashboard"
      className={`${s["image"]} ${s[position]}`}
    />
  );
};

export default SecondGrid;
