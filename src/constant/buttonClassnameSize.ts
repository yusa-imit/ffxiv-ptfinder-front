import { themeSizesValue } from "@type/theme/themeSizes";
import { getClassname } from "src/lib/getClassname";

const prefix = "btn-";
export const buttonClassnameSize = getClassname(themeSizesValue, prefix);
