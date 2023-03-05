import type { Meta, StoryObj } from '@storybook/react';

import Colors from './Colors';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Colors> = {
  title: 'Ensome/Colors',
  component: Colors,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Colors>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    color: 'primary',
  },
};
export const Secondary: Story = {
  args: {
    color: 'secondary',
  },
};
export const Tertiary: Story = {
  args: {
    color: 'tertiary',
  },
};
export const HelperBlue1: Story = {
  args: {
    color: 'helperBlue1',
  },
};
export const HelperBlue2: Story = {
  args: {
    color: 'helperBlue2',
  },
};
export const HelperBlue3: Story = {
  args: {
    color: 'helperBlue3',
  },
};
export const Black: Story = {
  args: {
    color: 'black',
  },
};
export const Grey: Story = {
  args: {
    color: 'grey',
  },
};
export const Background: Story = {
  args: {
    color: 'background',
  },
};
export const Error: Story = {
  args: {
    color: 'error',
  },
};


