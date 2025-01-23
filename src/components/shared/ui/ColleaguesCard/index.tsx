import Image, { StaticImageData } from "next/image";
import TitleText from "../text/TitleText";
import s from "./s.module.scss";
import HeaderText from "../text/HeaderText";

const ColleaguesCard: React.FC<{
  img: StaticImageData;
  name: string;
  role: string;
  text: string;
}> = ({ name, role, text, img }) => {
  return (
    <article className={s["colleagues-card"]}>
      <header>
        <Image className={s["colleagues-card__img"]} src={img} alt={name} />
        <h3>
          <TitleText>{name}</TitleText>
        </h3>
        <p>
          <TitleText>{role}</TitleText>
        </p>
      </header>
      <footer>
        <HeaderText className={s["colleagues-card__text"]}>{text}</HeaderText>
      </footer>
    </article>
  );
};

export default ColleaguesCard;
