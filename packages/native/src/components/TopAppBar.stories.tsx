import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { TopAppBar } from "./TopAppBar";

const meta: Meta<typeof TopAppBar> = {
  title: "Components/App/Top App Bar",
  component: TopAppBar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=1381-97351)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TopAppBar>;

export const Default: Story = {
  args: {"title":"Title"} as Partial<React.ComponentProps<typeof TopAppBar>>,
};
