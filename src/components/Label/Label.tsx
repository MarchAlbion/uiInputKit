import classNames from "classnames";
import style from "./label.module.scss";
import infoIconSvg from "../../icons/info.svg";
import { useState } from "react";

type Props = {
  required?: boolean;
  label?: string;
  infoIcon?: boolean;
};

export default function Label({ required, label, infoIcon }: Props) {
  const isRequired = required ? "(required)" : "";
  const [isTollkit, setIsTollkit] = useState(false);

  return (
    <div className={classNames(style.labelContainer)}>
      <label
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
            <span className={classNames(style.iconTooltip)}>
              This is a tooltip
            </span>
          )}
          <img src={infoIconSvg} alt="info" />
        </div>
      )}
    </div>
  );
}
