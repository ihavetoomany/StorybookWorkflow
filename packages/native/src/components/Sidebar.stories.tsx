import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Sidebar } from "./Sidebar";

const meta: Meta<typeof Sidebar> = {
  title: "Components/App/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=6629-14484)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: {} as Partial<React.ComponentProps<typeof Sidebar>>,
};
