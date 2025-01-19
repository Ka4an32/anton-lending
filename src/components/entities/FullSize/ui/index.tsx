import fullSize from "../assets/fullsize.gif";

import s from "./s.module.scss";

const FullSize: React.FC<{ className?: string }> = ({ className }) => {
  return <img src={fullSize.src} className={`${s.fullsize} ${className}`} />;
};

export default FullSize;
