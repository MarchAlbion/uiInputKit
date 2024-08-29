import classNames from "classnames";
import { ChangeEvent } from "react";
import style from "./input.module.scss";
import { ReactComponent as SearchIcon } from "../../icons/searchIcon.svg";
import { ReactComponent as HelpIcon } from "../../icons/help.svg";

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
  error?: boolean;
  searchIcon?: boolean;
  helpIcon?: boolean;
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
  error = false,
  searchIcon,
  helpIcon,
}: Props) {
  const isQuiet = quiet ? "quiet" : "";
  const labelPosition = side ? "side" : "";
  const isError = error ? "error" : "";
  const isSearchIcon = searchIcon ? "searchIcon" : "";
  const isSearchIconError = error && searchIcon ? "error" : "";
  const isHelpIcon = helpIcon ? "helpIcon" : "";
  const isHelpIconError = error && helpIcon ? "error" : "";
  return (
    <div
      className={classNames(
        style.inputContainer,
        style[`inputContainer--${labelPosition}`]
      )}
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
        )}
        id="input"
        onChange={onChange}
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
    </div>
  );
}
