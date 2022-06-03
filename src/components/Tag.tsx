import { ResponsiveBreakpoints } from "../type/theme/responsiveBreakpoints";
import { ColorTypes } from "../type/theme/colorTypes";
import { getColorTypeClass, getSizeClass } from "src/lib/classNameFunction";
import { ReactChild } from "react";
interface TagProps {
  data: string | ReactChild;
  size?: ResponsiveBreakpoints;
  colorType?: ColorTypes;
  outline?: boolean;
}

export default function Tag({
  data,
  size = "md",
  colorType = "",
  outline,
}: TagProps): JSX.Element {
  return (
    <div
      className={`badge ${outline && "badge-outline"} ${getSizeClass(
        "badge",
        size
      )} ${getColorTypeClass("badge", colorType)}`}
    >
      {data}
    </div>
  );
}
