import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Ensome/Components/Standard Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Enabled: Story = {
  args: {
    label:"Learn more"
  },
};

export const Pressed: Story = {
  args: {
    label:"Learn more"
   
  },
};

export const Disabled: Story = {
  args: {
    label:"Learn more",
    disabled:true
 
  },
};
