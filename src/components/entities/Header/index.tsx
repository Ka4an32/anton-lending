import TitleText from "@/components/shared/ui/text/TitleText";

import s from "./s.module.scss";

const Header = () => {
  return (
    <h3 className={s.header}>
      <TitleText>
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
        top-1 design agency,{" "}
        <span className={s.transfer}>10+ startups // etc</span>
      </TitleText>
    </h3>
  );
};

export default Header;
