import type { Meta, StoryObj } from "@storybook/react";

import Button from "../components/buttons/Button";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Ensome/Components/Buttons/Standard Button",
  argTypes: {
    size: {
      control: "text",
    },
    label: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    rounded: {
      control: "boolean",
    },
  },
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const SmallEnabled: Story = {
  args: {
    label: "Send",
  },
};
export const SmallEnabledAndRounded: Story = {
  args: {
    label: "Send",
    rounded: true,
  },
};

export const SmallPressed: Story = {
  args: {
    label: "Send",
  },
};
export const SmallPressedAndRounded: Story = {
  args: {
    label: "Send",
    rounded: true,

  },
};

export const SmallDisabled: Story = {
  args: {
    label: "Send",
    disabled: true,
  },
};
export const SmallDisabledAndRounded: Story = {
  args: {
    label: "Send",
    disabled: true,
    rounded: true,
  },
};
export const BigEnabled: Story = {
  args: {
    label: "Learn more",
    size: "big",
  },
};
export const BigEnabledAndRounded: Story = {
  args: {
    label: "Learn more",
    size: "big",
    rounded: true,
  },
};

export const BigPressed: Story = {
  args: {
    label: "Learn more",
    size: "big",
  },
};
export const BigPressedAndRounded: Story = {
  args: {
    label: "Learn more",
    size: "big",
    rounded: true,

  },
};

export const BigDisabled: Story = {
  args: {
    label: "Learn more",
    disabled: true,
    size: "big",
  },
};
export const BigDisabledAndRounded: Story = {
  args: {
    label: "Learn more",
    disabled: true,
    size: "big",
    rounded: true,
  },
};
