import NavMenu from "@type/navMenu";
import Link from "next/link";
import { useRouter } from "next/router";
import { getColor } from "src/lib/getColor";
import Collapse from "./Collapse";

interface MenuProps extends React.HTMLAttributes<HTMLUListElement> {
  data: Array<NavMenu>;
  direction: "horizontal" | "vertical";
  nested?: number;
}

export default function Menu({
  data,
  direction,
  nested = 0,
  className,
  ...etc
}: MenuProps) {
  const route = useRouter();
  console.log(direction);
  return (
    <ul
      className={`${nested > 0 ? "" : "menu"} ${
        direction === "horizontal"
          ? nested === 0 && "menu-horizontal " + " p-0 mx-2"
          : "p-1"
      }  ${getColor("base", 200)} ${nested > 0 && "shadow"} ${className}`}
      {...etc}
    >
      {data.map((d_value, d_idx) => {
        if (!d_value.type) {
          return (
            <li
              key={d_idx}
              tabIndex={d_value.subMenus ? 0 : undefined}
              className={`${route.pathname === d_value.href ? "active" : ""}`}
            >
              {d_value.subMenus !== undefined ? (
                <>
                  <span>{d_value.title}</span>
                  <Menu
                    data={d_value.subMenus}
                    direction={direction}
                    nested={nested + 1}
                  />
                </>
              ) : (
                <span>{d_value.title}</span>
              )}
            </li>
          );
        } else if (d_value.type === "category") {
          return (
            <li className="menu-title">
              <span>{d_value.title}</span>
            </li>
          );
        } else {
          console.error(
            "Menu element's type could not be able to be assigned except undefined or 'category'."
          );
          return;
        }
      })}
    </ul>
  );
}
