import { ColorTypes } from "../type/theme/colorTypes";
export const getColor = (
  colorType: ColorTypes = "primary",
  value?: 100 | 200 | 300
) => {
  return `bg-${
    colorType === "base" ? colorType + `-${value}` : colorType
  } text-${colorType}-content`;
};
