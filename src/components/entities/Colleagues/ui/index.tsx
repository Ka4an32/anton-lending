import ColleaguesCard from "@/components/shared/ui/ColleaguesCard";
import s from "./s.module.scss";

import Igor from "../assets/igor.jpeg";
import Alexey from "../assets/alexey.jpeg";

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
    role: "Techlead at mts ai",
    text: "«Anton has a good understanding of product development and communicates with frontend and backend developers in the same language»",
  },
];

const Colleagues = () => {
  return (
    <div className={s["colleagues"]}>
      {colleagues.map((colleague) => (
        <ColleaguesCard key={colleague.name} {...colleague} />
      ))}
    </div>
  );
};

export default Colleagues;
