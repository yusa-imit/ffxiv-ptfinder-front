import { theme } from "@recoil/theme";
import { ReactChild, ReactChildren } from "react";
import { useRecoilValue } from "recoil";
import { getColor } from "src/lib/getColor";

interface ContainerProps {
  children?: ReactChild | ReactChildren;
}

export default function Container({ children }: ContainerProps): JSX.Element {
  const globalTheme = useRecoilValue(theme);
  return (
    <div
      className={`w-full xl:w-[1280px] h-fit flex justify-center items-center p-5 ${getColor(
        "base",
        100
      )}`}
      data-theme={globalTheme}
    >
      {children}
    </div>
  );
}
