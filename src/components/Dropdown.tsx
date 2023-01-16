import MenuItems, { Item } from "./MenuItems";

type DropdownProps = {
  submenus: Item[];
  dropdown: boolean;
  depthLevel: number;
};

export const Dropdown = ({ submenus, dropdown, depthLevel }: DropdownProps) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};
