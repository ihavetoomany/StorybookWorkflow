import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Menu } from "./Menu";

const meta: Meta<typeof Menu> = {
  title: "Components/App/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=328-18920)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  args: {"items":["One","Two"]} as Partial<React.ComponentProps<typeof Menu>>,
};
