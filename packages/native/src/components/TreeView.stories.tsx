import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { TreeView } from "./TreeView";

const meta: Meta<typeof TreeView> = {
  title: "Components/App/Tree View",
  component: TreeView,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=783-83182)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TreeView>;

export const Default: Story = {
  args: {"nodes":[{"label":"Root","children":[{"label":"Child"}]}]} as Partial<React.ComponentProps<typeof TreeView>>,
};
