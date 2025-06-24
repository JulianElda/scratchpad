import type { Meta, StoryObj } from "@storybook/react-vite";
import { action } from "storybook/actions";
import { expect } from "storybook/test";
import { useState } from "react";
import { type InputProps } from "lib/input/input.types";
import { Input } from "./input";
import { inputProps1, inputProps2 } from "./input.mocks";

const InputTemplate = (args: InputProps) => {
  const [value, setValue] = useState(args.value || "");

  const handleChange = (newValue: string | number) => {
    setValue(newValue);
  };

  return (
    <Input
      {...args}
      value={value}
      onChange={handleChange}
    />
  );
};

const meta = {
  title: "Tests/Input",
  component: InputTemplate,
  decorators: [
    (Story) => (
      <div className="max-w-sm text-lg">
        <Story />
      </div>
    ),
  ],
  tags: ["!autodocs"],
} satisfies Meta<typeof InputTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TestElements: Story = {
  name: "render elements",
  args: {
    ...inputProps1,
    onChange: action("onChange"),
  },
  async play({ canvas }) {
    await expect(canvas.getByLabelText(inputProps1.label)).toBeInTheDocument();
    await expect(canvas.getByText(inputProps1.label)).toBeInTheDocument();
    await expect(canvas.getByTestId(inputProps1.id)).toBeInTheDocument();
    await expect(
      canvas.getByDisplayValue(inputProps1.value)
    ).toBeInTheDocument();
  },
};

export const TextInitialValue: Story = {
  name: "text: has initial value",
  args: {
    ...inputProps1,
    onChange: action("onChange"),
  },
  async play({ canvas }) {
    await expect(canvas.getByTestId(inputProps1.id)).toHaveValue(
      inputProps1.value
    );
  },
};

export const TextChangeValue: Story = {
  name: "text: change value",
  args: {
    ...inputProps1,
    onChange: action("onChange"),
  },
  async play({ canvas, userEvent }) {
    // Empty value
    await userEvent.clear(canvas.getByTestId(inputProps1.id));
    await expect(canvas.getByTestId(inputProps1.id)).toHaveValue("");

    // String
    await userEvent.clear(canvas.getByTestId(inputProps1.id));
    await userEvent.type(canvas.getByTestId(inputProps1.id), "test");
    await expect(canvas.getByTestId(inputProps1.id)).toHaveValue("test");

    // Email
    await userEvent.clear(canvas.getByTestId(inputProps1.id));
    await userEvent.type(
      canvas.getByTestId(inputProps1.id),
      "test@example.com"
    );
    await expect(canvas.getByTestId(inputProps1.id)).toHaveValue(
      "test@example.com"
    );

    // Number
    await userEvent.clear(canvas.getByTestId(inputProps1.id));
    await userEvent.type(canvas.getByTestId(inputProps1.id), "1234");
    await expect(canvas.getByTestId(inputProps1.id)).toHaveValue("1234");

    // Special characters
    await userEvent.clear(canvas.getByTestId(inputProps1.id));
    await userEvent.type(
      canvas.getByTestId(inputProps1.id),
      "1234.456,789!@#+*"
    );
    await expect(canvas.getByTestId(inputProps1.id)).toHaveValue(
      "1234.456,789!@#+*"
    );
  },
};

export const NumberHasInitialValue: Story = {
  name: "number: has initial value",
  args: {
    ...inputProps2,
    onChange: action("onChange"),
  },
  async play({ canvas }) {
    await expect(canvas.getByTestId(inputProps2.id)).toHaveValue(
      inputProps2.value
    );
  },
};

export const NumberChangeValue: Story = {
  name: "number: change value",
  args: {
    ...inputProps2,
    onChange: action("onChange"),
  },
  async play({ canvas, userEvent }) {
    // Empty value
    await userEvent.clear(canvas.getByTestId(inputProps2.id));
    await expect(canvas.getByTestId(inputProps2.id)).toHaveValue(null);

    // Number
    await userEvent.clear(canvas.getByTestId(inputProps2.id));
    await userEvent.type(canvas.getByTestId(inputProps2.id), "1234");
    await expect(canvas.getByTestId(inputProps2.id)).toHaveValue(1234);
    // Should retain its previous value
    await userEvent.type(canvas.getByTestId(inputProps2.id), "asdf");
    await expect(canvas.getByTestId(inputProps2.id)).toHaveValue(1234);

    // String
    await userEvent.clear(canvas.getByTestId(inputProps2.id));
    await userEvent.type(canvas.getByTestId(inputProps2.id), "asdf");
    await expect(canvas.getByTestId(inputProps2.id)).toHaveValue(null);

    // Decimal
    await userEvent.clear(canvas.getByTestId(inputProps2.id));
    await userEvent.type(canvas.getByTestId(inputProps2.id), "3.14");
    await expect(canvas.getByTestId(inputProps2.id)).toHaveValue(3.14);
  },
};
