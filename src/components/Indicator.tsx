import { ReactChild } from "react";
import { ColorTypes } from "../type/theme/colorTypes";
interface IndicatorProps {
  data?: string;
  colorType?: ColorTypes;
  positionX?: "start" | "center" | "end";
  positionY?: "top" | "middle" | "bottom";
  children: ReactChild;
}
export default function Indicator({
  data,
  colorType,
  positionX,
  positionY,
  children,
}: IndicatorProps): JSX.Element {
  return (
    <div className="indicator">
      <span
        className={`indicator-item badge ${colorType && "badge-" + colorType} ${
          positionX && "indicator-" + positionX
        } ${positionY && "indicator-" + positionY}`}
      ></span>
    </div>
  );
}
