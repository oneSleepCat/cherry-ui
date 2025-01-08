import React, { ReactNode } from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";

type AnimationType =
  | "zoom-in-top"
  | "zoom-in-down"
  | "zoom-in-left"
  | "zoom-in-right";

type Transition = CSSTransitionProps & {
  animation?: AnimationType;
  children?: ReactNode;
  wrapper?: boolean;
};

const defaultProps = {
  animation: "zoom-in-top",
  appear: true,
  unmountOnExit: true,
  wrapper: false,
};

const Transition: React.FC<CSSTransitionProps> = (props) => {
  const { animation, classNames, children, wrapper, ...restProps } = {
    ...defaultProps,
    ...props,
  };

  return (
    <CSSTransition classNames={classNames || animation} {...restProps}>
      {wrapper ? <div>{children as ReactNode}</div> : children}
    </CSSTransition>
  );
};

Transition.displayName = "Transition";

export default Transition;
