import HeaderText from "@/components/shared/ui/text/HeaderText";
import s from "./s.module.scss";

const ThirdBlock = () => {
  return (
    <section className={s["third-block"]}>
      <h2>
        <HeaderText className={s["third-block__text"]}>
          I saved over 100 million for a top-1 bank by launching an MLP product,
          worked at mts, sberbank, consulting, launched 10+ products for b2c
          startups
        </HeaderText>
      </h2>
    </section>
  );
};

export default ThirdBlock;
