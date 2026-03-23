import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { ListItem } from "./ListItem";

const meta: Meta<typeof ListItem> = {
  title: "Components/App/ListItem",
  component: ListItem,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=437-27104)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Default: Story = {
  args: {"title":"Item","subtitle":"Detail"} as Partial<React.ComponentProps<typeof ListItem>>,
};
