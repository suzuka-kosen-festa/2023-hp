import Defect from "./defect";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Defect> = {
  component: Defect,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Defect>;

export const Default: Story = {};

export default meta;
