import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
export const theme = atom({
  key: "theme",
  default: "cupcake",
  effects_UNSTABLE: [persistAtom],
});
