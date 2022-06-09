import { ReactNode } from "react";
interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  desc: string;
  children?: ReactNode;
}
export default function Tooltip({
  desc,
  children,
  className,
  ...etc
}: TooltipProps) {
  return (
    <div className={`tooltip ${className}`} data-tip={desc} {...etc}>
      {children}
    </div>
  );
}
