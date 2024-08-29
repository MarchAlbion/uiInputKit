import classNames from "classnames";
import style from "./hint.module.scss";

type Props = {
  error?: boolean;
  hint: string;
  labelPosition?: string;
};

export default function Hint({ hint, error, labelPosition }: Props) {
  const isError = error ? "error" : "";
  return (
    <span
      className={classNames(
        style.inputHint,
        style[`inputHint--${labelPosition}`],
        style[`inputHint--${isError}`]
      )}
    >
      {hint}
    </span>
  );
}
