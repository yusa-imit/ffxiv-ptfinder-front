import { atom } from "recoil";
export const test = atom<boolean[]>({
  key: "test",
  default: [false, false, false, false],
});
