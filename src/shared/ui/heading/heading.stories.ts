import { Heading } from "./heading";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Heading> = {
  component: Heading,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    children: "default",
  },
};

export const H1: Story = {
  args: {
    as: "h1",
    children: "h1",
  },
};

export const H2: Story = {
  args: {
    as: "h2",
    children: "h2",
  },
};

export const H3: Story = {
  args: {
    as: "h3",
    children: "h3",
  },
};

export const H4: Story = {
  args: {
    as: "h4",
    children: "h4",
  },
};

export const H5: Story = {
  args: {
    as: "h5",
    children: "h5",
  },
};

export const H6: Story = {
  args: {
    as: "h6",
    children: "h6",
  },
};

export default meta;
