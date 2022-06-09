import { ReactNode } from "react";
import { getColor } from "src/lib/getColor";
interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

export default function Footer({ children }: FooterProps) {
  return (
    <footer className={`footer p-10 ${getColor("base")}`}>{children}</footer>
  );
}
