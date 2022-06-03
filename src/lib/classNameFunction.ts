import { ResponsiveBreakpoints } from "@type/theme/responsiveBreakpoints";
import { ColorTypes } from "../type/theme/colorTypes";

export const getSizeClass = (
  prefix: string,
  size?: ResponsiveBreakpoints
): string => {
  return size !== undefined ? prefix + size : "";
};

export const getColorTypeClass = (
  prefix: string,
  colorTypes?: ColorTypes
): string => {
  return colorTypes !== undefined ? prefix + colorTypes : "";
};
