import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/App/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=443-32243)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {"tabs":["Tab 1","Tab 2"],"activeIndex":0} as Partial<React.ComponentProps<typeof Tabs>>,
};
