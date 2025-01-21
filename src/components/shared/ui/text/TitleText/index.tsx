import { ClassAttributes, HTMLAttributes, PropsWithChildren } from "react";
import Text from "../RootText";

import s from "./s.module.scss";

const TitleText: React.FC<
  PropsWithChildren<
    ClassAttributes<HTMLSpanElement> & HTMLAttributes<HTMLSpanElement>
  >
> = ({ children, className, ...props }) => {
  return (
    <Text
      font="helvetica"
      className={`${s.title} ${className ?? ""}`}
      {...props}
    >
      {children}
    </Text>
  );
};

export default TitleText;
