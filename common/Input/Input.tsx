import React, {
  ChangeEvent,
  useState,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import type { InputHTMLAttributes, ReactNode } from "react";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
  disabled?: boolean;
  size?: "lg" | "sm";
  /** input前缀 */
  prepand?: string | ReactNode;
  className?: string;
  children?: ReactNode;
  onChange?: (...args: any[]) => void;
  [x: string]: any;
}

export const Input: React.FC<InputProps> = forwardRef((props, ref) => {
  const {
    disabled,
    size,
    prepand,
    className,
    children,
    onChange,
    ...restProps
  } = props;
  // input value
  const [inputValue, setValue] = useState(restProps.value || "");
  const inputRef = useRef<any>();

  useEffect(() => {
    setValue(restProps.value || "");
  }, [restProps.value]);

  useImperativeHandle(ref, () => {
    return {
      ...inputRef.current,
    };
  });

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
    setValue(e.target.value);
  };

  return (
    <div className={className} style={restProps.style}>
      {prepand ? <span className="prepand">{prepand}</span> : null}
      <div className="input-wrapper">
        <input
          disabled={disabled}
          onChange={inputChange}
          value={inputValue}
          ref={inputRef}
          {...restProps}
        >
          {children}
        </input>
      </div>
    </div>
  );
});
