import { theme } from "@recoil/theme";
import { ReactNode } from "react";
import { useRecoilValue } from "recoil";
import { getColor } from "src/lib/getColor";

interface ContainerProps {
  children?: ReactNode;
}

export default function Container({ children }: ContainerProps): JSX.Element {
  const globalTheme = useRecoilValue(theme);
  return (
    <div
      className="w-screen h-screen flex justify-center items-center"
      data-theme={globalTheme}
    >
      <div
        className={`w-full xl:w-[1280px] min-h-screen h-fit flex justify-center items-center flex-col px-5 ${getColor(
          "base",
          300
        )}`}
      >
        {children}
      </div>
    </div>
  );
}
