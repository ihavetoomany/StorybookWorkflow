import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { List } from "./List";

const meta: Meta<typeof List> = {
  title: "Components/App/List",
  component: List,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=946-88322)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  args: {} as Partial<React.ComponentProps<typeof List>>,
};
