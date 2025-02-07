import s from "./s.module.scss";
import TitleText from "@/components/shared/ui/text/TitleText";

const links = [
  {
    name: "Contact with me",
    link: "https://t.me/productanthony",
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
        anton belyi — PRODUCT MANAGER and principle product designer, ex mts{" "}
        <a target="_blank" href="https://futurecrew.ru" className={s.grey}>
          futurecrew
        </a>{" "}
        / ai, ex @{" "}
        <a
          target="_blank"
          href="https://developers.sber.ru/portal/products/pulse"
          className={s.grey}
        >
          sberbank,{" "}
        </a>
        10+ startups // etc. experience in IOS development, search engines,
        social apps, fintech, e-com, b2b saas products
        <br />
        <br />
        all gifs i took from 69pixel studio, thank you
      </TitleText>
    </div>
  );
};

export default Footer;
