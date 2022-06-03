import { ReactChild } from "react";
interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  desc: string;
  children?: ReactChild;
}
export default function Tooltip({ desc, children, ...etc }: TooltipProps) {
  return (
    <div className={``} data-tip={desc} {...etc}>
      {children}
    </div>
  );
}
