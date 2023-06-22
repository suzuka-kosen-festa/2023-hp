import { Footer } from "~/domain";
import { Layout } from "./layout";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Layout> = {
  component: Layout,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Layout>;

export const Default: Story = {
  args: {
    children: "Hello, world!",
    content: <Footer content="第58回鈴鹿高専祭 実行委員会" />,
  },
};

export default meta;
