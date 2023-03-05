import type { Meta, StoryObj } from "@storybook/react";

import ParagraphText from "./ParagraphText";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof ParagraphText> = {
  title: "Ensome/Typography/Paragraph Text",
  component: ParagraphText,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ParagraphText>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Paragraph1Regular: Story = {
  args: {
    variant: "p1",
    textContent: "Paragraph1",
  },
};
export const Paragraph2Regular: Story = {
  args: {
    variant: "p2-r",
    textContent: "Paragraph2 Regular",
  },
};
export const Paragraph2Bold: Story = {
  args: {
    variant: "p2-b",
    textContent: "Paragraph2 Bold",
  },
};
export const Paragraph3Regular: Story = {
  args: {
    variant: "p3-r",
    textContent: "Paragraph3 Regular",
  },
};
export const Paragraph3Bold: Story = {
  args: {
    variant: "p3-b",
    textContent: "Paragraph3 Bold",
  },
};
