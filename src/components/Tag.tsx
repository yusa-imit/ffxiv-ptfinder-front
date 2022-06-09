import { ResponsiveBreakpoints } from "../type/theme/responsiveBreakpoints";
import { ColorTypes } from "../type/theme/colorTypes";
import { getColorTypeClass, getSizeClass } from "src/lib/classNameFunction";
import { ReactNode } from "react";
interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  data: ReactNode;
  size?: ResponsiveBreakpoints;
  colorType?: ColorTypes;
  outline?: boolean;
}

export default function Tag({
  data,
  size = "md",
  colorType,
  outline,
  className,
  ...etc
}: TagProps): JSX.Element {
  return (
    <div
      className={`badge ${outline && "badge-outline"} ${getSizeClass(
        "badge",
        size
      )} ${colorType && getColorTypeClass("badge", colorType)} ${className}`}
      {...etc}
    >
      {data}
    </div>
  );
}
