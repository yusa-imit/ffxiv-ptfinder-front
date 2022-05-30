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
] as const;

export type themeColors = typeof availables[number];
export { availables as themeColorsValue };
