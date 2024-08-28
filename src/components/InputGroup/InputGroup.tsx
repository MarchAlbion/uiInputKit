import style from "./inputGroup.module.scss";
import { ChangeEvent } from "react";
import classNames from "classnames";
import Label from "../Label/Label";
import Hint from "../Hint/Hint";
import Input from "../Input/Input";

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
  infoIcon?: boolean;
};

export default function InputGroup({
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
  infoIcon = false,
}: InputProps) {
  const labelPosition = side ? "side" : "";
  const isDisabled = disabled ? "disabled" : "";
  return (
    <div
      className={classNames(
        style.inputGroup,
        style[`inputGroup--${size}`],
        style[`inputGroup--${labelPosition}`],
        style[`inputGroup--${isDisabled}`],
      )}
    >
      <div
        className={classNames(
          style.inputGroupContainer,
          style[`inputGroupContainer--${labelPosition}`]
        )}
      >
        <Label label={label} required={required} infoIcon={infoIcon} />
        <Input
          onChange={onChange}
          type={type}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          required
          side={side}
          size={size}
          quiet={quiet}
        />
      </div>
      {hint && <Hint hint={hint} />}
    </div>
  );
}
