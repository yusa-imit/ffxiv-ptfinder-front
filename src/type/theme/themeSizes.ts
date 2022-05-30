//export type themeSizes = "lg" | "md" | "sm" | "xs";
const availables = ["lg", "md", "sm", "xs"] as const;

export type themeSizes = typeof availables[number];
export { availables as themeSizesValue };
