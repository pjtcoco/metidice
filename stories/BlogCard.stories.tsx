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
    type: "variant1",
    hasArrow: true,
    date: "22 June 2022",
    children: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...",
  },
};
export const Variant2_Medium: Story = {
  args: {
    type: "variant2",
    tags: ["App", "CIO", "Future"],
    children: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
};
export const Variant3_Small: Story = {
  args: {
    title: "Staffing software: key capabilities and top products",
    type: "variant3",
    hasArrow: true,
    children: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure.",
  },
};
export const Variant4_RightText: Story = {
  args: {
    type: "variant4",
    title: "Sed ut perspiciatis unde omnis at vero blanditils",
    children:
      "Mauris purus diam, iaculis non leo nec, ultricies fringilla odio. Fusce feugiat elit facilisis volutpat venenatis. Vestibulum tempor ligula vel orci consectetur, euismod augue bibendum...",
  },
};
export const Variant5_NoDescription: Story = {
  args: {
    title: "ISO 13485 compliance of medical devices",
    type: "variant5",
    hasArrow: true,
    // children: "At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.",
  },
};
export const Variant6_NoImage: Story = {
  args: {
    tags: ["VPN", "Proxy"],
    type: "variant6",
    children: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti...",
  },
};
