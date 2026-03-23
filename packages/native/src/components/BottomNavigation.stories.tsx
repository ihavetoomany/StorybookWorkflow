import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { BottomNavigation } from "./BottomNavigation";

const meta: Meta<typeof BottomNavigation> = {
  title: "Components/App/Bottom Navigation",
  component: BottomNavigation,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=456-29486)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BottomNavigation>;

export const Default: Story = {
  args: {"items":[{"key":"h","label":"Home","icon":"home"},{"key":"p","label":"Pay","icon":"payment"}],"activeKey":"h"} as Partial<React.ComponentProps<typeof BottomNavigation>>,
};
