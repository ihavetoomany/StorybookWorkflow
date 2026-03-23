import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { TopNavBar } from "./TopNavBar";

const meta: Meta<typeof TopNavBar> = {
  title: "Components/App/Top Nav Bar",
  component: TopNavBar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=6939-1668)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TopNavBar>;

export const Default: Story = {
  args: {"items":["A","B"],"activeIndex":0} as Partial<React.ComponentProps<typeof TopNavBar>>,
};
