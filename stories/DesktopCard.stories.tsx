import DesktopCard from "@/components/cards/DesktopCard";
import BrainCircuitIcon from "@/components/icons/BrainCircuitIcon";
import IsometricBrain3DIcon from "@/components/icons/IsometricBrain3DIcon";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof DesktopCard> = {
  title: "Ensome/Components/Cards/DesktopCard",
  component: DesktopCard,
  argTypes: {
    variant: {
      control: "text",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DesktopCard>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Variant1_RightText: Story = {
  args: {
    variant: "variant1",
    // icon: <IsometricBrain3DIcon />,
    children: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
};
export const Variant2_CenterText: Story = {
  args: {
    variant: "variant2",
    // icon: <IsometricBrain3DIcon />,
    children: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
};
export const Variant3_StretchedRight_GlassIcons: Story = {
  args: {
    variant: "variant3",
    icon: <IsometricBrain3DIcon />,
    children: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure.",
  },
};
export const Variant4_SmallCard: Story = {
  args: {
    variant: "variant4",
    icon: <BrainCircuitIcon />,
    children: "At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.",
  },
};
