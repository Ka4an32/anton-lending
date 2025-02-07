import ColleaguesCard from "@/components/shared/ui/ColleaguesCard";
import s from "./s.module.scss";

import Igor from "../assets/igor.jpeg";
import Alexey from "../assets/alexey.jpeg";
import { useMediaQuery } from "usehooks-ts";

const colleagues = [
  {
    img: Igor,
    name: "Igor Eremeev",
    role: "Chief product officer, mts innovations",
    text: "«I have never seen a better specialist in the field of ux and product. Lively, energetic, Anton won me over with his proactivity»",
  },
  {
    img: Alexey,
    name: "Alexey samoylov",
    role: "Techlead & Product Owner at Mts Innovations",
    text: "«Anton has a good understanding of product development and communicates with frontend and backend developers in the same language»",
  },
];

const Colleagues: React.FC<{ offsetScroll: number }> = ({ offsetScroll }) => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div className={s["colleagues"]}>
      {colleagues.map((colleague) => (
        <ColleaguesCard
          isActive={offsetScroll >= (isMobile ? 75 : 90)}
          key={colleague.name}
          {...colleague}
        />
      ))}
    </div>
  );
};

export default Colleagues;
