import { useState, useEffect, useRef } from "react";
import { Dropdown } from "./Dropdown";

import { Link } from "react-router-dom";
import { Box, Heading, Image, Text } from "grommet";

export type Item = {
  title: string;
  url?: string;
  submenu?: Array<Item> | undefined;
  image?: string;
  text?: string;
};

type MenuItemsProps = {
  items: Item;
  depthLevel: number;
};

const MenuItems = ({ items, depthLevel }: MenuItemsProps) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event: any) => {
      // @ts-ignore
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  return (
    <li
      className="menu-items"
      // @ts-ignore
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {window.innerWidth < 960 && depthLevel === 0 ? (
              items.title
            ) : (
              <Link to={items.url}>{items.title}</Link>
            )}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{" "}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link to={items.url || ""}>
          <Box direction="row" gap="medium" align="center" pad="medium">
            {items.image && (
              <Image
                src={items.image}
                width="27px"
                height="39px"
                color="black"
              />
            )}
            <Box>
              <Heading level={5}>{items.title}</Heading>
              <Text size="small">{items.text}</Text>
            </Box>
          </Box>
        </Link>
      )}
    </li>
  );
};

export default MenuItems;
