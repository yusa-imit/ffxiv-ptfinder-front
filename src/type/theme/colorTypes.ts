/*export type themeColors =
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error";
*/
const availables = [
  "primary",
  "secondary",
  "accent",
  "info",
  "success",
  "warning",
  "error",
  "base",
  "",
] as const;

export type ColorTypes = typeof availables[number];
export { availables as ColorTypesValue };
