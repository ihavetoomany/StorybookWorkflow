import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Layout } from "./Layout";

const meta: Meta<typeof Layout> = {
  title: "Components/App/Layout",
  component: Layout,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=569-53917)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const Default: Story = {
  args: {} as Partial<React.ComponentProps<typeof Layout>>,
};
