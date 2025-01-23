import Image from "next/image";
import first from "../assets/first.jpg";
import second from "../assets/second.jpg";
import third from "../assets/third.jpg";

import s from "./s.module.scss";

const photos = [first, second, third];

const Gallery = () => {
  return (
    <div className={s["gallery"]}>
      {photos.map((photo) => (
        <div key={photo.src} className={s["gallery__image-contaier"]}>
          <Image
            style={{ objectFit: "cover", objectPosition: "center" }}
            fill
            src={photo}
            alt="photo"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
