import Logo from "./logo";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Logo> = {
  component: Logo,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Logo>;

export const Default: Story = {};

export default meta;
