/**
 * @interface NavMenu
 * @param title title for menu
 * @param href href for menu
 * @param type (optional) if type is "category", then this element has submenus
 * @param subMenus (optioanl) submenu for category. If type is "category" this is neccessary.
 */
interface NavMenu {
  title: string;
  href: string;
  type?: "category";
  subMenus?: Array<NavMenu>;
}

export default NavMenu;
