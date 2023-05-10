import SearchButton from "@/components/buttons/SearchButton";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof SearchButton> = {
  title: "Ensome/Components/Buttons/Search Button",
  component: SearchButton,
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SearchButton>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Enabled: Story = {};

export const Pressed: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
