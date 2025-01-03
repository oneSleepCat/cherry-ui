import React, { createContext, useState } from "react";
import classNames from "classnames";
import { MenuItemProps } from "../MenuItem/type";
import { MenuProps, MenuContextProps } from "./type";
import "./index.scss";

export const MenuContext = createContext<MenuContextProps>({
  index: "0",
  mode: "horizontal",
  defaultOpenSubMenus: [],
});

const defaultProps = {
  defaultIndex: "0",
  mode: "horizontal",
  trigger: "hover",
  defaultOpenSubMenus: [],
};

const Menu: React.FC<MenuProps> = (props) => {
  const {
    defaultIndex,
    className,
    style,
    mode,
    trigger,
    defaultOpenSubMenus,
    children,
    onSelect,
  } = {
    ...defaultProps,
    ...props,
  };

  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const classes = classNames("cherry-menu", className, {
    "menu-horizontal": mode === "horizontal",
    "menu-vertical": mode === "vertical",
  });

  const handleClick = (index: string) => {
    setActiveIndex(index);
    onSelect?.(index);
  };

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childrenElment =
        child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childrenElment.type;

      if (displayName === "MenuItem" || displayName === "SubMenu") {
        return React.cloneElement(childrenElment, {
          index: childrenElment.props.index
            ? childrenElment.props.index
            : index.toString(),
        });
      }
      console.error("Menu has a child which is not a MenuItem");
    });
  };

  return (
    <MenuContext.Provider
      value={{
        index: activeIndex,
        mode,
        trigger,
        defaultOpenSubMenus,
        onSelect: handleClick,
      }}
    >
      <ul className={classes} style={style}>
        {renderChildren()}
      </ul>
    </MenuContext.Provider>
  );
};

Menu.displayName = "Menu";

export default Menu;
