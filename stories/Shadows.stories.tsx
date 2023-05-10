import type { Meta, StoryObj } from '@storybook/react';

import Shadows from './Shadows';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Shadows> = {
  title: 'Ensome/Components/Shadows',
  component: Shadows,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: '3em',backgroundColor:"white" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Shadows>;

export const Button: Story = {
  args: {
    shadow: 'button',
  },
};
export const Card1: Story = {
  args: {
    shadow: 'card1',
  },
};
export const Card2: Story = {
  args: {
    shadow: 'card2',
  },
};
export const Card3: Story = {
  args: {
    shadow: 'card3',
  },
};
export const Dropdown: Story = {
  args: {
    shadow: 'dropdown',
  },
};
