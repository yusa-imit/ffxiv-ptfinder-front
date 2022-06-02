import NavMenu from "@type/navMenu";
import Link from "next/link";
import { getColor } from "src/lib/getColor";
import BottomArrowIcon from "src/svg/BottomArrowIcon";
import MenuIcon from "src/svg/MenuIcon";
import RightArrowIcon from "src/svg/RightArrowIcon";
import Button from "./Button";

interface NavProps {
  menus: Array<NavMenu>;
  name: string;
}

export function Nav({ menus, name }: NavProps) {
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
  return (
    <div className={`navbar ${getColor("base", 200)}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <MenuIcon />
          </label>
          <ul
            tabIndex={0}
            className={`menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 ${getColor(
              "base",
              200
            )}`}
          >
            {getNavMenuComponents("vertical")}
          </ul>
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
        <ul className="menu menu-horizontal p-0">
          {getNavMenuComponents("horizontal")}
        </ul>
      </div>
      <div className="navbar-end">{END_BUTTONS}</div>
    </div>
  );
}
