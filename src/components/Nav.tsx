import Link from "next/link";
import { getColor } from "src/lib/getColor";
import MenuIcon from "src/svg/MenuIcon";
import Button from "./Button";

export function Nav() {
  return (
    <div className={`navbar ${getColor("base", 100)}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <MenuIcon />
          </label>
          <ul
            tabIndex={0}
            className={`menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 ${getColor(
              "base",
              100
            )}`}
          >
            {MENULISTS}
          </ul>
        </div>
        <Link href={LINKTOINDEX} passHref>
          <Button ghost={true} className="normal-case text-xl">
            {APPNAME}
          </Button>
        </Link>
        {/**
         * Reference
         * Delete this on production
        <a className="btn btn-ghost normal-case text-xl">{APPNAME}</a>
        */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{MENULISTS}</ul>
      </div>
      <div className="navbar-end">{END_BUTTONS}</div>
    </div>
  );
}
