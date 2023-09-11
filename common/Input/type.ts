import type { InputHTMLAttributes, ReactNode } from 'react'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  disabled?: boolean;
  size?: 'lg' | 'sm';
  /** input前缀 */
  prepand?: string | ReactNode;
  className?: string;
  children?: ReactNode;
  onChange?: (...args: any[]) => void;
  [x: string]: any;
}