import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { CardList } from "./CardList";

const meta: Meta<typeof CardList> = {
  title: "Components/App/Card list",
  component: CardList,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=6579-2432)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardList>;

export const Default: Story = {
  args: {} as Partial<React.ComponentProps<typeof CardList>>,
};
