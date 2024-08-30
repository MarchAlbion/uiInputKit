import style from "./inputGroup.module.scss";
import { ChangeEvent, MouseEvent, FocusEvent, FormEvent } from "react";
import classNames from "classnames";
import Label from "../Label/Label";
import Hint from "../Hint/Hint";
import Input from "../Input/Input";

type InputProps = {
  label?: string;
  type: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onMouseEnter?: (e: MouseEvent<HTMLInputElement>) => void;
  onMouseLeave?: (e: MouseEvent<HTMLInputElement>) => void;
  placeholder?: string;
  hint?: string;
  size?: "xs" | "md" | "lg" | "xl";
  side?: boolean;
  quiet?: boolean;
  disabled?: boolean;
  required?: boolean;
  infoIcon?: boolean;
  error?: boolean;
  tooltip?: string;
  searchIcon?: boolean;
  helpIcon?: boolean;
  textAlign?: "left" | "right";
  theme?: "light" | "dark";
};

export default function InputGroup({
  label,
  type,
  value,
  onChange,
  onBlur,
  onSubmit,
  onFocus,
  onMouseEnter,
  onMouseLeave,
  placeholder,
  hint,
  size = "md",
  side = false,
  quiet = false,
  disabled = false,
  required = false,
  infoIcon = false,
  error = false,
  tooltip,
  searchIcon = false,
  helpIcon = false,
  textAlign = "left",
  theme = "light",
}: InputProps) {
  const labelPosition = side ? "side" : "";
  const isDisabled = disabled ? "disabled" : "";
  return (
    <div
      className={classNames(
        style.inputGroup,
        style[`inputGroup--${size}`],
        style[`inputGroup--${labelPosition}`],
        style[`inputGroup--${isDisabled}`]
      )}
      data-theme={theme}
    >
      <div
        className={classNames(
          style.inputGroupContainer,
          style[`inputGroupContainer--${labelPosition}`]
        )}
      >
        {label && (
          <Label
            label={label}
            required={required}
            infoIcon={infoIcon}
            tooltip={tooltip}
          />
        )}

        <Input
          onChange={onChange}
          onBlur={onBlur}
          onSubmit={onSubmit}
          onFocus={onFocus}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          type={type}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          required
          side={side}
          size={size}
          quiet={quiet}
          error={error}
          searchIcon={searchIcon}
          helpIcon={helpIcon}
          textAlign={textAlign}
        />
      </div>
      {hint && <Hint hint={hint} error={error} labelPosition={labelPosition} />}
    </div>
  );
}
