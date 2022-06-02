interface NavMenu {
  title: string;
  href: string;
  subMenus?: Array<SubMenu>;
}
interface SubMenu {
  title: string;
  href: string;
}

export default NavMenu;
