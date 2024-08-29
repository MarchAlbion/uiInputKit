import classNames from "classnames";
import style from "./label.module.scss";
import infoIconSvg from "../../icons/info.svg";
import { useState } from "react";

type Props = {
  required?: boolean;
  label?: string;
  infoIcon?: boolean;
  tooltip?: string;
};

export default function Label({ required, label, infoIcon, tooltip }: Props) {
  const isRequired = required ? "(required)" : "";
  const [isTollkit, setIsTollkit] = useState(false);

  return (
    <div className={classNames(style.labelContainer)}>
      <label
        htmlFor="input"
        className={classNames(style.label, { [style.labelInfoIcon]: infoIcon })}
      >
        {label + " " + isRequired}
      </label>
      {infoIcon && (
        <div
          className={classNames(style.labelInfoIcon)}
          onMouseEnter={() => setIsTollkit(true)}
          onMouseLeave={() => setIsTollkit(false)}
        >
          {isTollkit && (
            <span className={classNames(style.iconTooltip)}>{tooltip}</span>
          )}
          <img src={infoIconSvg} alt="info" />
        </div>
      )}
    </div>
  );
}
