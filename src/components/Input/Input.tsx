import classNames from "classnames";
import { ChangeEvent, FocusEvent, MouseEvent, FormEvent } from "react";
import style from "./input.module.scss";
import { ReactComponent as SearchIcon } from "../../icons/searchIcon.svg";
import { ReactComponent as HelpIcon } from "../../icons/help.svg";


type Props = {
  label?: string;
  type?: string;
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
  error?: boolean;
  searchIcon?: boolean;
  helpIcon?: boolean;
  textAlign?: "left" | "right";
};

export default function Input({
  type,
  value,
  onChange,
  onBlur,
  onSubmit,
  onFocus,
  onMouseEnter,
  onMouseLeave,
  placeholder,
  size,
  quiet,
  disabled,
  required,
  side,
  error,
  searchIcon,
  helpIcon,
  textAlign,
}: Props) {
  const isQuiet = quiet ? "quiet" : "";
  const labelPosition = side ? "side" : "";
  const isError = error ? "error" : "";
  const isSearchIcon = searchIcon ? "searchIcon" : "";
  const isSearchIconError = error && searchIcon ? "error" : "";
  const isHelpIcon = helpIcon ? "helpIcon" : "";
  const isHelpIconError = error && helpIcon ? "error" : "";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (required && !value) {
      return;
    }
    event.preventDefault();
    if (onSubmit) {
      onSubmit(event);
    }
  };

  return (
    <form
      className={classNames(
        style.inputContainer,
        style[`inputContainer--${labelPosition}`]
      )}
      onSubmit={handleSubmit}
    >
      {searchIcon && (
        <SearchIcon
          className={classNames(
            style.searchIcon,
            style[`searchIcon--${isSearchIconError}`]
          )}
        />
      )}

      <input
        className={classNames(
          style.input,
          style[`input--${size}`],
          style[`input--${labelPosition}`],
          style[`input--${isQuiet}`],
          style[`input--${isError}`],
          style[`input--${isSearchIcon}`],
          style[`input--${isHelpIcon}`],
          style[`input--${textAlign}`]
        )}
        id="input"
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
      />
      {helpIcon && (
        <HelpIcon
          className={classNames(
            style.helpIcon,
            style[`helpIcon--${isHelpIconError}`]
          )}
        />
      )}
    </form>
  );
}
