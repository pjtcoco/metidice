import BlogCard from "@/components/cards/BlogCard";
import BrainCircuitIcon from "@/components/icons/BrainCircuitIcon";
import IsometricBrain3DIcon from "@/components/icons/IsometricBrain3DIcon";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof BlogCard> = {
  title: "Ensome/Components/Cards/BlogCard",
  component: BlogCard,
  argTypes: {
    variant: {
      control: "text",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BlogCard>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Variant1_Big: Story = {
  args: {
    variant: "variant1",
    // icon: <IsometricBrain3DIcon />,
    children: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
};
export const Variant2_Medium: Story = {
  args: {
    variant: "variant2",
    // icon: <IsometricBrain3DIcon />,
    children: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
};
export const Variant3_Small: Story = {
  args: {
    variant: "variant3",
    icon: <IsometricBrain3DIcon />,
    children: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure.",
  },
};
export const Variant4_RightText: Story = {
  args: {
    variant: "variant4",
    icon: <BrainCircuitIcon />,
    children: "At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.",
  },
};
export const Variant5_NoDescription: Story = {
  args: {
    variant: "variant4",
    icon: <BrainCircuitIcon />,
    children: "At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.",
  },
};
export const Variant6_NoImage: Story = {
  args: {
    variant: "variant4",
    icon: <BrainCircuitIcon />,
    children: "At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.",
  },
};
