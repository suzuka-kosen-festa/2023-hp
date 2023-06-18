import LogoStatic from "./logo-static";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LogoStatic> = {
  component: LogoStatic,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof LogoStatic>;

export const Default: Story = {};

export default meta;
