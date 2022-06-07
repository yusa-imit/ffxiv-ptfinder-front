import { SetStateAction } from "react";
import { SetterOrUpdater } from "recoil";
import { getColorTypeClass, getSizeClass } from "src/lib/classNameFunction";
import { ResponsiveBreakpoints } from "../type/theme/responsiveBreakpoints";
interface CheckBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Array<string>;
  colorType: "primary" | "secondary" | "accent";
  size: ResponsiveBreakpoints;
  disabled?: boolean;
  state: boolean[];
  setState:
    | SetterOrUpdater<Array<boolean>>
    | React.Dispatch<SetStateAction<boolean[]>>;
}
export default function CheckBox({
  data,
  colorType,
  size,
  className,
  disabled,
  state,
  setState,
  ...etc
}: CheckBoxProps) {
  const PREFIX = "checkbox-";
  return (
    <div className={`${className}`} {...etc}>
      {data.map((d_v, d_i) => {
        return (
          <div key={d_i}>
            <label className="label cursor-pointer">
              <span className="label-text">{d_v}</span>
              <input
                disabled={disabled}
                type="checkbox"
                checked={state[d_i] === true ? true : false}
                className={`${getSizeClass(PREFIX, size)} ${getColorTypeClass(
                  PREFIX,
                  colorType
                )} checkbox`}
                onChange={() => {
                  let newState = [...state];
                  newState[d_i] = !newState[d_i];
                  setState(newState);
                }}
              ></input>
            </label>
          </div>
        );
      })}
    </div>
  );
}
