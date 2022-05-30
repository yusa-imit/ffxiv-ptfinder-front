import { theme } from "@recoil/theme";
import { ReactChildren } from "react";
import { useRecoilValue } from "recoil";

interface ContainerProps {
  children?: ReactChildren | ReactChildren[];
}

export default function Container({ children }: ContainerProps): JSX.Element {
  const globalTheme = useRecoilValue(theme);
  return (
    <div
      className="w-full h-full flex justify-center items-center"
      data-theme={globalTheme}
    >
      {children}
    </div>
  );
}
