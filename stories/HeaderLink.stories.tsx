import HeaderLink from "@/components/pagination/HeaderLink";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof HeaderLink> = {
  title: "Ensome/Components/Pagination/HeaderLink",
  component: HeaderLink,
  argTypes: {
    active: {
      control: "boolean",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof HeaderLink>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Enabled: Story = {
  args: {
  },
};
export const Active: Story = {
  args: {
    active: true,
  },
};

