import { Narrowable } from "@type/Narrowable";
export const tuple = <T extends Narrowable[]>(...args: T) => args;
