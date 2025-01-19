import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

import s from "./s.module.scss";

const Text: React.FC<
  PropsWithChildren<
    { font: "helvetica" | "editorial" } & DetailedHTMLProps<
      HTMLAttributes<HTMLSpanElement>,
      HTMLSpanElement
    >
  >
> = ({ children, font, className, ...props }) => {
  const fontName = `${font}-font`;
  return (
    <span className={`${s.text} ${fontName} ${className}`} {...props}>
      {children}
    </span>
  );
};

export default Text;
