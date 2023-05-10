import FooterLink from "@/components/pagination/FooterLink";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof FooterLink> = {
  title: "Ensome/Components/Pagination/FooterLink",
  component: FooterLink,
  argTypes: {
    active: {
      control: "boolean",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FooterLink>;

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

