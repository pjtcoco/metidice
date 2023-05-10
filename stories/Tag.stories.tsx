import Tag from "@/components/pagination/Tag";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Tag> = {
  title: "Ensome/Components/Pagination/Tag",
  component: Tag,
  argTypes: {
    label: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tag>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Enabled: Story = {
  args: {
    label: "Proxy",
  },
};
export const Disabled: Story = {
  args: {
    label: "Monat",
    disabled: true,
  },
};
