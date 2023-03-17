import ReviewCard from "@/components/cards/ReviewCard";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof ReviewCard> = {
  title: "Ensome/Components/Cards/ReviewCard",
  component: ReviewCard,
  argTypes: {
    type: {
      control: "text",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ReviewCard>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Variant1_ImageOutside: Story = {
  args: {
    type: "variant1",
    name: "Alex Bern",
    title: "CEO by PixelPerfect",
    // imageSrc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...",
  },
};
export const Variant2_ImageInside: Story = {
  args: {
    type: "variant2",
    name: "Alex Bern",
    title: "CEO by PixelPerfect",
    // imageSrc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...",
  },
};
