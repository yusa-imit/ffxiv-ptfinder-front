import { buttonClassNameColor } from "@constant/buttonClassnameColor";
import { themeColors } from "@type/theme/themeColors";
import { buttonClassnameSize } from "src/constant/buttonClassnameSize";
import { themeSizes } from "../type/theme/themeSizes";

interface NormalButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  color?: themeColors;
  size?: themeSizes;
  ghost?: boolean;
  link?: boolean;
  outline?: boolean;
  active?: boolean;
  disabled?: boolean;
  glass?: boolean;
  loading?: boolean;
  noAnimation?: boolean;
  wide?: boolean;
  block?: boolean;
  circle?: boolean;
  square?: Boolean;
  className?: string;
}

export default function NormalButton({
  color = "primary",
  size = "md",
  ghost,
  link,
  outline,
  active,
  disabled,
  glass,
  loading,
  noAnimation,
  wide,
  block,
  circle,
  square,
  className,
  ...others
}: NormalButtonProps): JSX.Element {
  return (
    <button
      className={`${buttonClassNameColor[color]} ${buttonClassnameSize[size]} ${
        ghost === true && "btn-ghost"
      } ${link === true && "btn-link"} ${outline === true && "btn-outline"} ${
        active === true && "btn-active"
      } ${disabled === true && "btn-disabled"} ${glass === true && "glass"} ${
        loading === true && "loading"
      } ${noAnimation === true && "no-animation"} ${
        circle === true && "btn-circle"
      } ${wide === true && "btn-wide"} ${block === true && "btn-block"} ${
        square === true && "btn-square"
      } ${className}`}
      {...others}
    ></button>
  );
}
