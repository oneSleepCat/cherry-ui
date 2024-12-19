import React from "react";
import classNames from "classnames";
import "./index.scss";

interface SubMenuProps {
  title: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { title, className, children } = props;

  const classes = classNames("cherry-submenu", className);

  return (
    <li>
      <div className={classes}>{title}</div>
      {children}
    </li>
  );
};

SubMenu.displayName = "SubMenu";

export default SubMenu;
