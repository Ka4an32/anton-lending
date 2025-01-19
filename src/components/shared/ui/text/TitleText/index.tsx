import { PropsWithChildren } from "react";
import Text from "../RootText";

import s from "./s.module.scss";

const TitleText: React.FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return (
    <Text font="helvetica" className={`${s.title} ${className ?? ""}`}>
      {children}
    </Text>
  );
};

export default TitleText;
