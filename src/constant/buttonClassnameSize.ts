import { ResponsiveBreakpointsValue } from "@type/theme/responsiveBreakpoints";
import { getClassname } from "src/lib/getClassname";

const prefix = "btn-";
export const buttonClassnameSize = getClassname(
  ResponsiveBreakpointsValue,
  prefix
);
