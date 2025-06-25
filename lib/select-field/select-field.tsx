import { clsx } from "clsx";
import type { SelectFieldProps } from "lib/select-field/select-field.types";

export function SelectField(props: SelectFieldProps) {
  return (
    <select
      id={props.id}
      name={props.id}
      data-testid={props.id}
      value={props.value}
      className={clsx(
        "form-select w-full appearance-none rounded-md border-1 border-ink-gray py-2 pr-8 pl-2 text-ink-black focus:ring-1 focus:ring-primary-300 focus:ring-inset dark:bg-slate dark:text-ink-white",
        props.inInputField && "h-full rounded-l-none bg-transparent",
        !props.inInputField && "block pl-3"
      )}
      onChange={(event) => props.onChange(event.target.value)}>
      {props.options.slice().map((option) => (
        <option
          value={option.value}
          key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
