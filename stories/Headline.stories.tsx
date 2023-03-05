import type { Meta, StoryObj } from '@storybook/react';

import HeadlineText from './HeadlineText';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof HeadlineText> = {
  title: 'Ensome/Typography/Headline Text',
  component: HeadlineText,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HeadlineText>;

export const Headline1: Story = {
  args: {
    variant: "h1",
    textContent:"Headline1"
  },
};
export const Headline2: Story = {
  args: {
    variant: "h2",
    textContent:"Headline2"
  },
};
export const Headline3: Story = {
  args: {
    variant: "h3",
    textContent:"Headline3"
    
  },
};
export const Headline4: Story = {
  args: {
    variant: "h4",
    textContent:"Headline4"
    
  },
};
export const Headline5: Story = {
  args: {
    variant: "h5",
    textContent:"Headline5"
    
  },
};
export const Headline6: Story = {
  args: {
    variant: "h6",
    textContent:"Headline6"
    
  },
};
export const Headline7SemiBold: Story = {
  args: {
    variant: "h7-b",
    textContent:"Headline7 Bold"
    
  },
};
export const Headline7Medium: Story = {
  args: {
    variant: "h7-r",
    textContent:"Headline7 Regular"
    
  },
};
export const Headline8SemiBold: Story = {
  args: {
    variant: "h8",
    textContent:"Headline8"
    
  },
};
