import { PropsWithChildren } from "react";
import Text from "../RootText";

import s from "./s.module.scss";

const HeaderText: React.FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return (
    <Text font="editorial" className={`${s.header} ${className ?? ""} `}>
      {children}
    </Text>
  );
};

export default HeaderText;
