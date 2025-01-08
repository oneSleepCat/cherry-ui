import classNames from "classnames";
import { ButtonType, ButtonSize, ButtonShape } from "./types";
import "./index.scss";

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  btnType?: ButtonType;
  size?: ButtonSize;
  shape?: ButtonShape;
  href?: string;
  target?: string;
  children: React.ReactNode;
}

// 原生button 属性
type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;
// a 标签属性
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;

// 联合类型 Partial 可选类型
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const defaultProps = {
  disabled: false,
  btnType: 'default',
  size: 'small',
};

const Button: React.FC<BaseButtonProps> = (props: ButtonProps) => {
  const {
    btnType,
    size,
    disabled,
    shape,
    href,
    className,
    children,
    ...restProps
  } = {
    ...defaultProps,
    ...props,
  };

  const classes = classNames("cherry-btn", className, {
    [`cherry-btn-${btnType}`]: btnType,
    [`cherry-btn-${size}`]: size,
    [`cherry-btn-${shape}`]: shape,
    disabled: btnType === 'link' && disabled,
  });

  if (btnType === 'link' && href) {
    return (
      <a href={href} className={classes} target="_blank" {...restProps}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
