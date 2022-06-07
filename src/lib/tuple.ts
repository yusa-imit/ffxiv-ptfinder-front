import { Narrowable } from "@type/DataTypes/Narrowable";
export const tuple = <T extends Narrowable[]>(...args: T) => args;
