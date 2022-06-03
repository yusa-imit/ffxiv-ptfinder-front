import { atom } from "recoil";
export const step = atom<number>({
  key: "step",
  default: 0,
});
