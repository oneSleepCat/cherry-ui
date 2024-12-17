import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "../Menu/Menu";

interface MenuItemProps {
  classname?: string;
  index: number;
  style?: React.CSSProperties;
  disabled?: boolean;
  children: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { classname, index, style, disabled, children } = props;

  const context = useContext(MenuContext);

  const classes = classNames("cherry-menu-item", classname, {
    disabled: disabled,
    "is-active": context.index === index,
  });

  const handleClick = () => {
    if (context.onSelect && !disabled) {
      context.onSelect?.(index);
    }
  };

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};

export default MenuItem;
