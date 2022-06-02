import { DetailedHTMLProps, Children, ReactChild, ReactChildren } from "react";
import { getColor } from "src/lib/getColor";
import { useRecoilValue } from "recoil";
import { theme } from "@recoil/theme";

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  children?: ReactChild | ReactChildren;
}

export default function Footer({ children }: FooterProps) {
  return (
    <footer className={`footer p-10 ${getColor("base")}`}>{children}</footer>
  );
}
