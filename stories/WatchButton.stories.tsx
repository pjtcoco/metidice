import type { Meta, StoryObj } from "@storybook/react";

import WatchButton from "../components/buttons/WatchButton";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof WatchButton> = {
  title: "Ensome/Components/Buttons/Watch Button",
  argTypes:{
size:{
  control:"text"
},
disabled:{
  control:"boolean"
},
bordered:{
  control:"boolean"
},
transparent:{
  control:"boolean"
},
  },
  component: WatchButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof WatchButton>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Enabled: Story = {
  args: {
    label: "Watch the demo",
  },
};

export const Pressed: Story = {
  args: {
    label: "Watch the demo",
  },
};

export const Disabled: Story = {
  args: {
    label: "Watch the demo",
    disabled: true,
  },
};
export const NoBackgroundAndSmall: Story = {
  args: {
    label: "Watch the demo",
    transparent:false,
  },
};
export const NoBackgroundAndSmallBordered: Story = {
  args: {
    label: "Watch the demo",
    transparent:false,
    size:"small",
    bordered: true
  },
};
export const NoBackgroundAndBig: Story = {
  args: {
    label: "Watch the demo",
    transparent:false,
    size:"big"
  },
};
export const NoBackgroundAndBigBordered: Story = {
  args: {
    label: "Watch the demo",
    transparent:false,
    size:"big",
    bordered: true
  },
};
export const NoBackgroundDisabled: Story = {
  args: {
    label: "Watch the demo",
    disabled: true,
    transparent:false
  },
};
export const NoBackgroundDisabledBordered: Story = {
  args: {
    label: "Watch the demo",
    disabled: true,
    transparent:false,
    bordered: true
  },
};
