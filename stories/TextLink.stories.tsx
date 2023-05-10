import TextLink from "@/components/pagination/TextLink";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof TextLink> = {
  title: "Ensome/Components/Pagination/TextLink",
  component: TextLink,
  argTypes: {
    hasArrow: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextLink>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {},
};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithArrow: Story = {
  args: {
    hasArrow: true,
  },
};

export const WithArrowDisabled: Story = {
  args: {
    disabled: true,
    hasArrow: true,
  },
};

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
