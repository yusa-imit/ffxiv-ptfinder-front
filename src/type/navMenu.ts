interface NavMenu {
  title: string;
  href: string;
  type?: "category";
  subMenus?: Array<NavMenu>;
}

export default NavMenu;
