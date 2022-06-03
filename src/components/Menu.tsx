import NavMenu from "@type/navMenu";
import Link from "next/link";
import { useRouter } from "next/router";
import { getColor } from "src/lib/getColor";
import Collapse from "./Collapse";

interface MenuProps {
  data: Array<NavMenu>;
  direction: "horizontal" | "vertical";
}

export default function Menu({ data, direction }: MenuProps) {
  const route = useRouter();
  return (
    <ul
      tabIndex={0}
      className={`menu dropdown-content ${
        direction === "horizontal" ? "mt-3 p-2" : "p-0"
      } shadow rounded-box w-fit ${getColor("base", 200)}`}
    >
      {data.map((d_value, d_idx) => {
        if (!d_value.type) {
          return (
            <li
              key={d_idx}
              tabIndex={d_value.subMenus ? 0 : undefined}
              className={`${route.pathname === d_value.href ? "active" : ""}`}
            >
              <Link href={d_value.href} passHref>
                {d_value.subMenus !== undefined ? (
                  <Collapse
                    title={d_value.title}
                    content={
                      <Menu data={d_value.subMenus} direction={direction} />
                    }
                  />
                ) : (
                  <span>{d_value.title}</span>
                )}
              </Link>
            </li>
          );
        } else if (d_value.type === "category") {
          return (
            <li className="menu-title">
              <span>{d_value.title}</span>
            </li>
          );
        } else {
          return new Error(
            "Menu element's type could not be able to be assigned except undefined or 'category'."
          );
        }
      })}
    </ul>
  );
}
