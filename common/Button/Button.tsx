import React from "react";

import type { BaseButtonProps } from "./type";

export const Button: React.FC<BaseButtonProps> = (props) => {
  const {
    btnType = "default",
    size = "sm",
    href,
    disable,
    children,
    className,
    ...restProps
  } = props;

  if (btnType === "link" && href) {
    return (
      <a href={href} className={className} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button disabled={disable} className={className} {...restProps}>
        {children}
      </button>
    );
  }
};