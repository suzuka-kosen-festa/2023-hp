import { Paragraph } from "./paragraph";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Paragraph> = {
  component: Paragraph,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
  args: {
    children: "test test test",
  },
};

export default meta;
