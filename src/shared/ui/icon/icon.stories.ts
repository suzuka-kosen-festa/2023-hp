import { Icon } from "./icon";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Icon> = {
  component: Icon,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Icon>;

export const Defect: Story = {
  args: {
    type: "defect",
  },
};

export const Cloud1: Story = {
  args: {
    type: "cloud1",
  },
};

export const Cloud2: Story = {
  args: {
    type: "cloud2",
  },
};

export const Cloud3: Story = {
  args: {
    type: "cloud3",
  },
};

export const Cloud4: Story = {
  args: {
    type: "cloud4",
  },
};

export const Cloud5: Story = {
  args: {
    type: "cloud5",
  },
};

export const LogoStatic: Story = {
  args: {
    type: "logoStatic",
  },
};

export default meta;
