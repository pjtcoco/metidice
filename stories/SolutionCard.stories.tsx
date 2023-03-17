import SolutionCard from "@/components/cards/SolutionCard";
import BrainCircuitIcon from "@/components/icons/BrainCircuitIcon";
import IsometricBrain3DIcon from "@/components/icons/IsometricBrain3DIcon";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof SolutionCard> = {
  title: "Ensome/Components/Cards/SolutionCard",
  component: SolutionCard,
  argTypes: {
    variant: {
      control: "text",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SolutionCard>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Variant1_NoIcon: Story = {
  args: {
    variant: "variant1",
    // icon: <IsometricBrain3DIcon />,
    // children: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
};
export const Variant2_WithIcon: Story = {
  args: {
    variant: "variant2",
    // icon: <IsometricBrain3DIcon />,
    // children: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
};
export const Variant3_StretchedRight: Story = {
  args: {
    variant: "variant3",
    // icon: <IsometricBrain3DIcon />,
    // children: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure.",
  },
};

