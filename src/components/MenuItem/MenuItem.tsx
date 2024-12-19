import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "../Menu/Menu";
import { MenuItemProps } from "./type";
import "./index.scss";

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { classname, index, style, disabled, children } = props;

  const context = useContext(MenuContext);

  const classes = classNames("cherry-menu-item", classname, {
    "is-disabled": disabled,
    "is-active": context.index === index,
    "cherry-menu-item-vertical": context.mode === "vertical",
  });

  const handleClick = () => {
    if (context.onSelect && !disabled && (index || index === 0)) {
      context.onSelect?.(index);
    }
  };

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};

MenuItem.displayName = "MenuItem";

export default MenuItem;
