import Moveable from "react-moveable";
import nokia from "../assets/nokia.png";

import s from "./s.module.scss";
import { useRef } from "react";

const Nokia: React.FC<{
  mousePosition: { x: number; y: number };
}> = ({ mousePosition: { x, y } }) => {
  const ref = useRef(null);
  return (
    <>
      <div className={s["contact-container"]} ref={ref}>
        <div
          style={{
            transform: ` translate(${x / 10}px, ${-y / 10}px)`,
          }}
        >
          <div className={s["nokia-wrapper"]}>
            <img className={s["nokia"]} src={nokia.src} />
          </div>
        </div>
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

export default Nokia;
