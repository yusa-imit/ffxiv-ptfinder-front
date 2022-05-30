import { themeColorsValue } from "@type/theme/themeColors";
import { getClassname } from "../lib/getClassname";

const prefix = "btn-";
export const buttonClassNameColor = getClassname(themeColorsValue, prefix);
