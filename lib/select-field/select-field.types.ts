export type SelectFieldProps = {
  id: string;
  value: string;
  options: Array<{
    value: string;
    label: string;
  }>;
  inInputField?: boolean;
  onChange: (value: string) => void;
};
