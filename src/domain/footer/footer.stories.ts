import { Footer } from "./footer";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Footer> = {
  component: Footer,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    content: "第58回鈴鹿高専祭 実行委員会",
  },
};

export default meta;
