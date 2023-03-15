import Tab from "@/components/pagination/Tab";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Tab> = {
  title: "Ensome/Components/Pagination/Tab",
  component: Tab,
  argTypes: {
    size: {
      control: "text",
    },
    label: {
      control: "text",
    },
    outlined: {
      control: "boolean",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tab>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Small: Story = {
  args: {
    size: "small",
    label: "Mo",
  },
};
export const SmallAndOutlined: Story = {
  args: {
    size: "small",
    label: "Yr",
    outlined: true,
  },
};
export const Medium: Story = {
  args: {
    label: "Monthly",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Monthly",
  },
};
