import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Toolbar } from "./Toolbar";

const meta: Meta<typeof Toolbar> = {
  title: "Components/App/Toolbar",
  component: Toolbar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=2628-60184)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toolbar>;

export const Default: Story = {
  args: {} as Partial<React.ComponentProps<typeof Toolbar>>,
};
