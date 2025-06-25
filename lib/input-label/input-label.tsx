import { clsx } from "clsx";
import type { InputLabelProps } from "lib/input-label/input-label.types";

export function InputLabel(props: InputLabelProps) {
  return (
    <div className="flex">
      <label
        htmlFor={props.id}
        className={clsx(
          "mr-auto font-bold font-heading",
          props.hideLabel && "sr-only"
        )}>
        {props.label}
      </label>
      {props.value && <span>{props.value}</span>}
    </div>
  );
}
