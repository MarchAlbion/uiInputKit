import classNames from "classnames";
import style from "./hint.module.scss";

export default function Hint({hint}: {hint: string}) {
  return <span className={classNames(style.inputHint)}>{hint}</span>;
}