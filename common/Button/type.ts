import { type ReactNode } from "react";

export type ButtonTypes = "primary" | "danger" | "link" | "default";

export type ButtonSize = "lg" | "sm";

export interface BaseButtonProps {
  btnType?: ButtonTypes;
  href?: string;
  disable?: boolean;
  className?: string;
  size?: ButtonSize;
  children: ReactNode;
  [s: string]: any;
}
