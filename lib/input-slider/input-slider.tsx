import { InputField } from "lib/input-field/input-field";
import { InputLabel } from "lib/input-label/input-label";
import type { InputSliderProps } from "lib/input-slider/input-slider.types";

export function InputSlider(props: InputSliderProps) {
  return (
    <div className="flex-1">
      <InputLabel
        id={props.id}
        label={props.label}
        hideLabel={!!props.hideLabel}
        value={props.value}
      />
      <div>
        <InputField
          type="range"
          id={props.id}
          value={props.value}
          max={props.max}
          min={props.min}
          disabled={props.disabled}
          onChange={(value) => props.onChange?.(value)}
        />
      </div>
    </div>
  );
}
