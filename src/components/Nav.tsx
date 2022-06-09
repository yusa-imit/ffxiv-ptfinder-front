import NavMenu from "@type/navMenu";
import Link from "next/link";
import { useState, ReactNode } from "react";
import { getColor } from "src/lib/getColor";
import MenuIcon from "src/svg/MenuIcon";
import Button from "./Button";
import Menu from "./Menu";
import { useRecoilValue } from "recoil";
import { theme } from "@recoil/theme";

interface NavProps extends React.HTMLAttributes<HTMLDivElement> {
  menus: Array<NavMenu>;
  name: string;
  buttons: ReactNode;
}

export function Nav({ menus, name, buttons, className }: NavProps) {
  const [mobile_menu_open, set_mobile_menu_open] = useState(false);
  return (
    <div
      className={`navbar ${getColor("base", 200)} ${className} absolute top-2`}
    >
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
