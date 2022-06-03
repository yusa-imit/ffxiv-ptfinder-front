import { useRecoilState } from "recoil";
import { step } from "./step";

export const useStep: () => [
  number,
  { next: () => void; reset: () => void }
] = () => {
  const MAX_VALUE = 1;
  const [value, setValue] = useRecoilState(step);
  const reset = () => {
    setValue(0);
  };
  const next = () => {
    if (value === MAX_VALUE) reset();
    else setValue(value + 1);
  };
  return [value, { next, reset }];
};
