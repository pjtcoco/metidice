import TabSwitch from "@/components/pagination/TabSwitch";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof TabSwitch> = {
  title: "Ensome/Components/Pagination/TabSwitch",
  component: TabSwitch,
  argTypes: {
    size: {
      control: "text",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TabSwitch>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args

export const Mobile: Story = {
  args: {
    size: "medium",
  },
};
export const Desktop: Story = {
  args: {
    size: "large",
  },
};
