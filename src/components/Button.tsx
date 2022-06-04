import { buttonClassNameColor } from "@constant/buttonClassnameColor";
import { ColorTypes } from "@type/theme/colorTypes";
import { Children, ReactChild, ReactChildren } from "react";
import { buttonClassnameSize } from "src/constant/buttonClassnameSize";
import { getColorTypeClass, getSizeClass } from "src/lib/classNameFunction";
import { ResponsiveBreakpoints } from "../type/theme/responsiveBreakpoints";

interface NormalButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  color?: ColorTypes;
  size?: ResponsiveBreakpoints;
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
  children?: ReactChild | ReactChildren;
}

export default function Button({
  color,
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
      className={`${color && getColorTypeClass("btn-", color)} ${
        size && getSizeClass("btn-", size)
      } ${ghost === true && "btn-ghost"} ${link === true && "btn-link"} ${
        outline === true && "btn-outline"
      } ${active === true && "btn-active"} ${
        disabled === true && "btn-disabled"
      } ${glass === true && "glass"} ${loading === true && "loading"} ${
        noAnimation === true && "no-animation"
      } ${circle === true && "btn-circle"} ${wide === true && "btn-wide"} ${
        block === true && "btn-block"
      } ${square === true && "btn-square"} ${className}`}
      {...others}
    >
      {Children}
    </button>
  );
}
