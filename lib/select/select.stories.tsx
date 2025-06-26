import type { Meta, StoryObj } from "@storybook/react-vite";

import { Select } from "./select";
import { selectProperties1 } from "./select.mocks";

const meta = {
  component: Select,
  decorators: [
    (Story) => (
      <div className="max-w-sm text-lg">
        <Story />
      </div>
    ),
  ],
  title: "Select",
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicSelect: Story = {
  args: {
    ...selectProperties1,
  },
  name: "Select",
};

export const SelectWithoutLabel: Story = {
  args: {
    ...selectProperties1,
    hideLabel: true,
  },
  name: "Select without label",
};
