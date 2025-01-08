import React from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import './index.scss';

export type ThemePorps =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "light"
  | "dark";

interface Iconprops extends FontAwesomeIconProps {
  className?: string;
  theme?: ThemePorps;
}

const Icon: React.FC<Iconprops> = (props) => {
  const { className, theme, ...restProps } = props;

  const classes = classNames("cherry-icon", className, {
    [`icon-${theme}`]: theme,
  });

  return <FontAwesomeIcon className={classes} {...restProps} />;
};

Icon.displayName = "Icon";

export default Icon;
