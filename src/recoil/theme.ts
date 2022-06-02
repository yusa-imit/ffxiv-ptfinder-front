import { Theme } from "@type/theme/theme";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
export const theme = atom<Theme>({
  key: "theme",
  default: "cupcake",
  effects_UNSTABLE: [persistAtom],
});
