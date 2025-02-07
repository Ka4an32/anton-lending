import nokia from "../assets/nokia.png";

import s from "./s.module.scss";

const Nokia: React.FC<{
  mousePosition: { x: number; y: number };
}> = ({ mousePosition: { x, y } }) => {
  return (
    <>
      <div className={s["contact-container"]}>
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
    </>
  );
};

export default Nokia;
