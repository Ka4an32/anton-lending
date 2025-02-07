import TitleText from "@/components/shared/ui/text/TitleText";

import s from "./s.module.scss";

const Header = () => {
  return (
    <h3 className={s.header}>
      <TitleText>
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
      </TitleText>
    </h3>
  );
};

export default Header;
