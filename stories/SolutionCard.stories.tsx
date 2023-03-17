import SolutionCard from "@/components/cards/SolutionCard";
import SolutionCardItem from "@/components/cards/SolutionCardItem";
import BrainCircuitIcon from "@/components/icons/BrainCircuitIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import GoogleIcon from "@/components/icons/GoogleIcon";
import IsometricBrain3DIcon from "@/components/icons/IsometricBrain3DIcon";
import ParagraphText from "@/components/text/ParagraphText";
import type { Meta, StoryObj } from "@storybook/react";
import { nano } from "app/[locale]/layout";

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
    children: [<SolutionCardItem key={nano()}>Extract, transform, load (ETL)</SolutionCardItem>, <SolutionCardItem key={nano()}>Extract, transform, load (ETL)</SolutionCardItem>,<SolutionCardItem key={nano()}>Extract, transform, load (ETL)</SolutionCardItem>,],

    // icon: <IsometricBrain3DIcon />,
    // children: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
};
export const Variant2_WithIcon: Story = {
  args: {
    variant: "variant2",
    icon: <FacebookIcon />,
    children: [<SolutionCardItem key={nano()}>Extract, transform, load (ETL)</SolutionCardItem>, <SolutionCardItem key={nano()}>Extract, transform, load (ETL)</SolutionCardItem>,<SolutionCardItem key={nano()}>Extract, transform, load (ETL)</SolutionCardItem>,],
  },
};
export const Variant3_StretchedRight: Story = {
  args: {
    variant: "variant3",
    icon: <GoogleIcon />,
    children: <ParagraphText variant="p2-r">Extract, transform, load (ETL) or extract, load, transform (ELT); data governance (security, availability, quality) implementation.</ParagraphText>,

  },
};
