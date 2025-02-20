import React, { useContext, useState } from "react";
import classNames from "classnames";
import Icon from "@/components/Icon/Icon";
import Transition from "@/components/Transition/Transition";
import { MenuItemProps } from "../MenuItem/type";
import { MenuContext } from "../Menu/Menu";
import { SelectCallback } from "../Menu/type";
import "./index.scss";

interface SubMenuProps {
  title: React.ReactNode;
  index?: string;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
  onSelect?: SelectCallback;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const context = useContext(MenuContext);
  const { index, title, className, disabled, children } = props;

  const defaultOpen = context.defaultOpenSubMenus?.includes(index);

  const [isOpen, setIsOpen] = useState(defaultOpen);

  const classes = classNames("cherry-submenu", "cherry-menu-item", className, {
    "is-active": context.index.indexOf(index) !== -1,
    "is-disabled": disabled,
    "is-opened": isOpen,
    "is-vertical": context.mode === "vertical",
  });

  const containerClasses = classNames("cherry-submenu-container", {
    "is-opened": isOpen,
  });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (disabled) return;
    if (context.trigger === "click") {
      setIsOpen(!isOpen);
    }
    if (context.onSelect) {
      context.onSelect(index);
    }
  };

  let timer: any;

  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    e.preventDefault();
    clearTimeout(timer);
    timer = setTimeout(() => {
      setIsOpen(toggle);
    }, 300);
  };

  const clickEvents = {
    onClick: handleClick,
  };
  const mouseEvents =
    context.trigger === "hover"
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true);
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false);
          },
        }
      : {};

  const renderChildren = () => {
    const childrenComponent = React.Children.map(
      children,
      (child, childIndex) => {
        const childrenElment =
          child as React.FunctionComponentElement<MenuItemProps>;
        const { displayName } = childrenElment.type;

        if (displayName === "MenuItem") {
          return React.cloneElement(childrenElment, {
            index: childrenElment.props.index
              ? childrenElment.props.index
              : `${index}-${childIndex}`,
          });
        }
        console.error("SubMenu has a child which is not a MenuItem");
      }
    );

    return (
      <Transition
        in={isOpen}
        timeout={300}
        animation="zoom-in-top"
      >
        <ul className={containerClasses}>{childrenComponent}</ul>
      </Transition>
    );
  };

  return (
    <li className={classes} {...mouseEvents}>
      <div className="cherry-submenu-title" {...clickEvents}>
        {title}
        <Icon className="cherry-submenu-icon" icon={"angle-down"} />
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = "SubMenu";

export default SubMenu;
