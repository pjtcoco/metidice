import type { Meta, StoryObj } from "@storybook/react";

import MailIcon from "../components/icons/MailIcon";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof MailIcon> = {
  title: "Ensome/Components/Icons/AllIconProps",
  component: MailIcon,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MailIcon>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    size: "small",
    color: "helperBlue1",
  },
};
export const Medium: Story = {
  args: {
    color: "error",
  },
};
export const Large: Story = {
  args: {
    size: "large",
    color: "primary",
  },
};
