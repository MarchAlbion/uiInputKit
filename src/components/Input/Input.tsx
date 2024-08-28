
import style from "./input.module.scss";
import { ChangeEvent } from "react";
import classNames from "classnames";
import Label from "../Label/Label";
import Hint from "../Hint/Hint";

type InputProps = {
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
  label,
  type,
  value,
  onChange,
  placeholder,
  hint,
  size = "md",
  side = false,
  quiet = false,
  disabled = false,
  required = false,
}: InputProps) {
  const labelPosition = side ? "side" : "";
  const isQuiet = quiet ? "quiet" : "";


  console.log(isQuiet);
  return (
    <div>
      <div
        className={classNames(
          style.inputGroup,
          style[`inputGroup--${size}`],
          style[`inputGroup--${labelPosition}`]
        )}
      >
        <Label label={label} required={required} />
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
          required
        />
      </div>
      {hint && <Hint hint={hint}/>}
    </div>
  );
}
