import TitleText from "@/components/shared/ui/text/TitleText";

import s from "./s.module.scss";

const Header = () => {
  return (
    <h3 className={s.header}>
      <TitleText>
        anton belyi — PRODUCT MANAGER and principle product designer. ——
        currently at mts <span className={s.grey}>futurecrew</span> / ai, ex @{" "}
        <span className={s.grey}>sberbank</span>, @{" "}
        <span className={s.grey}>Humbleteam</span> eu consulting product agency,
        @ <span className={s.grey}>aic</span> top-1 design agency,{" "}
        <span className={s.transfer}>10+ startups // etc</span>
      </TitleText>
    </h3>
  );
};

export default Header;
