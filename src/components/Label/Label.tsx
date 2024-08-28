import classNames from "classnames";
import style from "./label.module.scss";

type Props = {
    required?: boolean;
    label?: string;
}

export default function Label({required,label}: Props) {
  const isRequired = required ? "(required)" : "";
  return (
    <label className={classNames(style.label, style.labelInfo)}>
      {label + " " + isRequired}
    </label>
  );
}
