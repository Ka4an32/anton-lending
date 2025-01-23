import s from "./s.module.scss";
import TitleText from "@/components/shared/ui/text/TitleText";

const links = [
  {
    name: "Contact with me",
    link: "https://t.me/likeyungviciouss",
  },
  {
    name: "portfolio",
    link: "",
  },
  {
    name: "CV",
    link: "",
  },
];

const Footer = () => {
  return (
    <div className={s["footer"]}>
      <ul>
        {links.map(({ name, link }) => (
          <li key={name}>
            <a target="_blank" rel="noreferrer" href={link}>
              <TitleText
                className={s["footer__text"] + " " + s["footer__text_link"]}
              >
                {name}
              </TitleText>
            </a>
          </li>
        ))}
      </ul>
      <TitleText className={s["footer__text"]}>
        anton belyi — PRODUCT MANAGER and principle product designer. ——
        currently at mts{" "}
        <a target="_blank" href="https://futurecrew.ru" className={s.grey}>
          futurecrew
        </a>{" "}
        / ai, ex @{" "}
        <a
          target="_blank"
          href="https://developers.sber.ru/portal/products/pulse"
          className={s.grey}
        >
          sberbank
        </a>
        , @{" "}
        <a target="_blanlk" href="https://humbleteam.com" className={s.grey}>
          Humbleteam
        </a>{" "}
        eu consulting product agency, @{" "}
        <a target="_blank" href="https://aic.ru" className={s.grey}>
          aic
        </a>{" "}
        top-1 design agency, 10+ startups // etc
        <br />
        <br />
        all gifs i took from 69pixel studio, thank you
      </TitleText>
    </div>
  );
};

export default Footer;
