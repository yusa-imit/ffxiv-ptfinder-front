import { SetStateAction, useState } from "react";
import { SetterOrUpdater } from "recoil";
import { getColorTypeClass, getSizeClass } from "src/lib/classNameFunction";
import { ResponsiveBreakpoints } from "../type/theme/responsiveBreakpoints";
interface RadioProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Array<string>;
  colorType: "primary" | "secondary" | "accent";
  size: ResponsiveBreakpoints;
  state: number;
  setState: SetterOrUpdater<number> | React.Dispatch<SetStateAction<number>>;
}
export default function Radio({
  data,
  className,
  colorType,
  size,
  state,
  setState,
  ...etc
}: RadioProps) {
  return (
    <div className={` ${className}`} {...etc}>
      {data.map((d_v, d_i) => {
        return (
          <div key={d_i} className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">{d_v}</span>
              <input
                type={"radio"}
                className={`${getSizeClass("raido-", size)} ${getColorTypeClass(
                  "radio-",
                  colorType
                )} radio`}
                checked={state === d_i ? true : false}
                onChange={() => {
                  setState(d_i);
                }}
              ></input>
            </label>
          </div>
        );
      })}
    </div>
  );
}
