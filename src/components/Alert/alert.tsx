import { useState } from "react";
import classNames from "classnames";
import "@/assets/iconfont/iconfont.js";
import "./index.scss";

type AlertType = "success" | "info" | "warning" | "error";

interface AlertProps {
  showIcon?: boolean;
  title?: string;
  content?: string;
  closable?: boolean;
  type?: AlertType;
}

// const ICON_MAP = {
//   success: "icon-chenggong",
//   error: "icon-cuowu",
//   info: "icon-xinxi",
//   warning: "icon-jinggao",
// };

export default function Alert(props: AlertProps) {
  const { closable, type = "default", title, content, showIcon = true } = props;

  const [isClose, setIsClose] = useState(true);

  const classes = classNames("cherry-alert", {
    [`cherry-alert-${type}`]: type,
  });

  if (!isClose) {
    return null;
  }

  return (
    <div className={classes}>
      {/* {showIcon && (
        <div className="cherry-alert-icon">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref={`#${ICON_MAP[type as AlertType]}`}></use>
          </svg>
        </div>
      )} */}
      <div className="cherry-alert-content">
        <div className="cherry-alert-title">{title}</div>
        <div className="cherry-alert-description">{content}</div>
      </div>
      {closable && (
        <div
          className="cherry-alert-close"
          onClick={() => {
            setIsClose(false);
          }}
        >
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-icon-close"></use>
          </svg>
        </div>
      )}
    </div>
  );
}
