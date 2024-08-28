import classNames from "classnames";
import { ChangeEvent } from "react";
import style from "./input.module.scss";

type Props = {
  label?: string;
  type?: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  hint?: string;
  size?: "xs" | "md" | "lg" | "xl";
  side?: boolean;
  quiet?: boolean;
  disabled?: boolean;
  required?: boolean;
};

export default function Input({
  type,
  value,
  onChange,
  placeholder,
  size = "md",
  quiet = false,
  disabled = false,
  required = false,
  side = false,
}: Props) {
  const isQuiet = quiet ? "quiet" : "";
  const labelPosition = side ? "side" : "";
  return (
    <input
      className={classNames(
        style.input,
        style[`input--${size}`],
        style[`input--${labelPosition}`],
        style[`input--${isQuiet}`]
      )}
      onChange={onChange}
      type={type}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
    />
  );
}
