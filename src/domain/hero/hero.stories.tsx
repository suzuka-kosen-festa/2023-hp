import { Hero } from "./hero";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Hero> = {
  component: Hero,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    soon: false,
  },
};

export const Soon: Story = {
  args: {
    soon: true,
  },
};

export default meta;
