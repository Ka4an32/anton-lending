import nokia from "../assets/nokia.gif";

import s from "./s.module.scss";

const Nokia: React.FC = () => {
  return (
    <div className={s["contact-container"]}>
      <a
        href="https://t.me/likeyungviciouss"
        target="_blank"
        rel="noreferrer"
        className={s["contact-action"]}
      >
        Contact <br /> with me
      </a>
      <img className={s["nokia"]} src={nokia.src} />
    </div>
  );
};

export default Nokia;
