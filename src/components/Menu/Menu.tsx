import React, { createContext, useState } from "react";
import classNames from "classnames";

type MenuMode = "horizontal" | "vertical";
type SelectCallback = (index: number) => void;

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  style?: React.CSSProperties;
  mode?: MenuMode;
  onSelect?: SelectCallback;
  children: React.ReactNode;
}

interface MenuContextProps {
  index: number;
  onSelect?: SelectCallback;
}

export const MenuContext = createContext<MenuContextProps>({ index: 0 });

const defaultProps = {
  defaultIndex: 0,
  mode: "horizontal",
};

const Menu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, className, style, mode, children, onSelect } = {
    ...defaultProps,
    ...props,
  };

  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const classes = classNames("cherry-menu", className, {
    "menu-horizontal": mode === "horizontal",
    "menu-vertical": mode === "vertical",
  });

  const handleClick = (index: number) => {
    setActiveIndex(index);
    onSelect?.(index);
  };

  return (
    <MenuContext.Provider value={{ index: activeIndex, onSelect: handleClick }}>
      <ul className={classes} style={style}>
        {children}
      </ul>
    </MenuContext.Provider>
  );
};

export default Menu;
