import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { SearchBar } from "./SearchBar";

const meta: Meta<typeof SearchBar> = {
  title: "Components/App/Search Bar",
  component: SearchBar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=1967-14095)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {"value":"","placeholder":"Search"} as Partial<React.ComponentProps<typeof SearchBar>>,
};
