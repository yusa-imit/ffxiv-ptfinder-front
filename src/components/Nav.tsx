import NavMenu from "@type/navMenu";
import Link from "next/link";
import { useState, ReactChild, ReactChildren } from "react";
import { getColor } from "src/lib/getColor";
import MenuIcon from "src/svg/MenuIcon";
import Button from "./Button";
import Menu from "./Menu";

interface NavProps {
  menus: Array<NavMenu>;
  name: string;
  buttons: ReactChild | ReactChildren;
}

export function Nav({ menus, name, buttons }: NavProps) {
  /**
   * DEPRECATED FUNCTION
   * Remove this on production
  const getNavMenuComponents = (direction: "horizontal" | "vertical") => {
    return menus.map((v, i) => {
      return (
        <li key={i} tabIndex={v.subMenus ? 0 : undefined}>
          <Link href={v.href} passHref>
            {v.title}
            {v.subMenus &&
              (direction === "horizontal" ? (
                <BottomArrowIcon />
              ) : (
                <RightArrowIcon />
              ))}
          </Link>
          {v.subMenus && (
            <ul className="p-2">
              {v.subMenus.map((sub_v, sub_i) => (
                <Link href={sub_v.href} key={sub_i} passHref>
                  <li>{sub_v.title}</li>
                </Link>
              ))}
            </ul>
          )}
        </li>
      );
    });
  };
   */
  const [mobile_menu_open, set_mobile_menu_open] = useState(false);
  return (
    <div className={`navbar ${getColor("base", 200)}`}>
      <div className="navbar-start">
        <div
          className={`dropdown ${mobile_menu_open ? "dropdown-open" : ""}`}
          onClick={() => {
            set_mobile_menu_open((prev) => !prev);
          }}
        >
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <MenuIcon />
          </label>
          <div className="dropdown-content">
            <Menu data={menus} direction={"vertical"} />
          </div>
        </div>
        <Link href={"/"} passHref>
          <Button ghost className="normal-case text-xl">
            {name}
          </Button>
        </Link>
        {/**
         * Reference
         * Delete this on production
        <a className="btn btn-ghost normal-case text-xl">{APPNAME}</a>
        */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <Menu data={menus} direction={"horizontal"} />
      </div>
      <div className="navbar-end">{buttons}</div>
    </div>
  );
}
